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
            style={[styles.checkbox, isChecked && styles.checkboxChecked]}
          />
        </View>
        <View style={styles.itemInfo}>
          <Text style={styles.itemText}>{text}</Text>
          <Text style={styles.itemQuantity}>Quantity: {quantity}</Text>
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
  },
  checkboxContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#CCC",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  checkbox: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "transparent",
  },
  checkboxChecked: {
    backgroundColor: "#007AFF",
  },
  itemInfo: {
    flex: 1,
  },
  itemText: {
    fontSize: 16,
  },
  itemQuantity: {
    fontSize: 14,
    color: "#666",
    marginTop: 8,
  },
});
