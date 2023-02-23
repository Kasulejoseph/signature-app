import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import HouseAddressItem from "./HouseAddressItem";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";
import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';


interface ListItem {
  id: number;
  address: string;
  delivery_date: string;
  driver_id: string;
  items_group_id: string;
  phone_number: string;
  receivers_group_id: string;
  stop_status: string;
}

const AddressItems = ({ navigation }) => {
  const [routes, setRoutes] = useState<ListItem[]>([]);

  const fetchRoutes = async () => {
    let tempDoc = [];
    const querySnapshot = await getDocs(collection(db, "routes"));
    querySnapshot.forEach((doc) => {
      tempDoc.push(doc.data());
    });
    setRoutes(tempDoc);
  };

  useEffect(() => {
    fetchRoutes();
  }, []);

  const handlePress = (id: string, receivers_group_id: string) => {
    console.log(`Item ${id} pressed!`);
    navigation.navigate("Invoices", { items_group_id: id, receivers_group_id });
  };
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
      <Text>Invoices to Sign Today</Text>
      <View style={styles.iconContainer}>
        <Icon name='book' size={20} color="#f4511e"  />
        <Text style={styles.buttonText}>{moment().format('MMM D')}</Text>
      </View>
      </View>
      <View style={styles.houseAddress}>
        {routes.map((item: ListItem) => (
          <HouseAddressItem
            key={item.id}
            text={item.address}
            onPress={() => handlePress(item.items_group_id, item.receivers_group_id)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    padding: 10
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  houseAddress: {
    margin: 15,
  },
  iconContainer: {
    marginRight: 10,
    justifyContent: 'flex-end',
    flexDirection: 'row'
    
  },
  buttonText: {
    // color: '#fff',
    fontSize: 16,
    marginLeft: 5
  },
});

export default AddressItems;
