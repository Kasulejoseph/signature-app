import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, Text } from "react-native";
import HouseInvoiceItem from "./HouseInvoiceItem";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import EditableDropDown from "./EditableDropDown";
import DigitalSignature from "./DigitalSignature";

interface ListItem {
  id: number;
  text: string;
  quantity: number;
  name: string;
  items_group_id: string;
  status: string;
  received_by: string;
  signature: string;
  driver_id: string;
}

export default function HouseInvoiceList({ navigation }) {
  const [items, setItems] = useState<ListItem[]>([]);
  const [receivers, setReceivers] = useState<ListItem[]>([]);
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [signatureData, setSignatureData] = useState('');


  const { routes } = navigation.getState();
  const { items_group_id, receivers_group_id } = routes[1].params;

  console.log(items_group_id,receivers_group_id );

  const filterUsersByGroupId = async () => {
    let tempDoc = [];
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.receivers_group_id === receivers_group_id.toString()) {
        tempDoc.push(data);
      }
    });
    setReceivers(tempDoc);
  };
  

  const filterItemsByGroupId = async () => {
    let tempDoc = [];
    const querySnapshot = await getDocs(collection(db, "items"));
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.items_group_id === items_group_id.toString()) {
        tempDoc.push(data);
      }
    });
    setItems(tempDoc);
  };
  
  useEffect(() => {
    filterItemsByGroupId();
    filterUsersByGroupId();
  }, []);

  const handleCheckBoxPress = (itemId: number, isChecked: boolean) => {
    if (isChecked) {
      setCheckedItems([...checkedItems, itemId]);
    } else {
      setCheckedItems(checkedItems.filter((id) => id !== itemId));
    }
  };

  const handleSignatureCaptured = (data: string) => {
    // setSignatureData(data);
  };

  const renderItem = ({ item }: { item: ListItem }) => {
    const isChecked = checkedItems.includes(item.id);
    return (
      <View>
        <HouseInvoiceItem
          text={item.name}
          quantity={item.quantity}
          isChecked={item.status === 'completed'}
          onCheckBoxPress={(isChecked) => handleCheckBoxPress(item.id, isChecked)
          }
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.items}>
      <View style={styles.itemInfo}>
          <Text style={styles.itemText}>Items</Text>
          <Text style={styles.itemQuantity}>Qty</Text>
        </View>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View>
        <EditableDropDown
         receivers = {receivers}
          defaultSelectedItem="Item 1"
          onItemSelected={(selectedItem) =>
            console.log(`Selected item: ${selectedItem}`)
          }
          onItemAdded={(selectedItem) =>
            console.log(`added item: ${selectedItem}`)
          }
        />
      </View>
      <View>
      <DigitalSignature onSignatureCaptured={handleSignatureCaptured} />
      {signatureData ? <Text>{signatureData}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
    },
    itemInfo: {
      flexDirection: 'row',
      justifyContent: "space-between",
      fontSize: 18,
      padding: 10,
      backgroundColor: '#F1F5F9',
      // color: '#2F3746',
    },
    itemText: {
      fontWeight: 'bold',
    },
    itemQuantity: {
      fontWeight: 'bold',
    },
    items: {
        marginBottom: 20,
    }
})
