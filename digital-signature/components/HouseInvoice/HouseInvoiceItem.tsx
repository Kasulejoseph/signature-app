import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface CheckBoxItemProps {
  text: string;
  quantity: number;
  isChecked: boolean;
  onCheckBoxPress: (isChecked: boolean) => void;
}

export default function HouseInvoiceItem({
  text,
  quantity,
  isChecked,
  onCheckBoxPress,
}: CheckBoxItemProps) {
  const handleCheckBoxPress = () => {
    onCheckBoxPress(!isChecked);
  };

  return (
    <TouchableOpacity onPress={handleCheckBoxPress}>
      <View style={styles.container}>
        <View style={styles.checkboxContainer}>
          <View
            style={[
              styles.checkbox,
              isChecked ? styles.checkboxChecked : styles.checkboxUnchecked,
            ]}
          />
        </View>
        <View style={styles.itemInfo}>
          <Text style={styles.itemText}>{text}</Text>
          <Text style={styles.itemQuantity}>{quantity}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    backgroundColor: '#F1F5F9'
  },
  checkboxContainer: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "#CCC",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  checkbox: {
    width: 14,
    height: 14,
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "#007AFF",
  },
  checkboxUnchecked: {
    backgroundColor: "transparent",
  },
  itemInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 16,
  },
  itemQuantity: {
    fontSize: 14,
    marginBottom: 8,
  },
});
