import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import HouseInvoiceItem from "./HouseInvoiceItem";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

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
  const [checkedItems, setCheckedItems] = useState<number[]>([]);

  const { routes } = navigation.getState();
  const { items_group_id } = routes[1].params;

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
  }, []);

  const handleCheckBoxPress = (itemId: number, isChecked: boolean) => {
    if (isChecked) {
      setCheckedItems([...checkedItems, itemId]);
    } else {
      setCheckedItems(checkedItems.filter((id) => id !== itemId));
    }
  };

  const renderItem = ({ item }: { item: ListItem }) => {
    const isChecked = checkedItems.includes(item.id);
    return (
      <HouseInvoiceItem
        text={item.name}
        quantity={item.quantity}
        isChecked={isChecked}
        onCheckBoxPress={(isChecked) => handleCheckBoxPress(item.id, isChecked)}
      />
    );
  };

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}
