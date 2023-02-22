import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import HouseAddressItem from "./HouseAddressItem";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

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

  const handlePress = (id: string) => {
    console.log(`Item ${id} pressed!`);
    navigation.navigate("Invoices", { items_group_id: id });
  };
  return (
    <View style={styles.container}>
      <Text></Text>
      <View style={styles.houseAddress}>
        {routes.map((item: ListItem) => (
          <HouseAddressItem
            key={item.id}
            text={item.address}
            onPress={() => handlePress(item.items_group_id)}
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
    marginTop: 100,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  houseAddress: {
    margin: 15,
  },
});

export default AddressItems;
