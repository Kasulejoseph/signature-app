import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

type HouseAddressItemProps = {
  text: string;
  status: string;
  onPress: () => void;
};

const HouseAddressItem = ({ text, status, onPress }: HouseAddressItemProps) => {
  const bgcolor =
    status == "pending"
      ? { backgroundColor: "#FFF" }
      : { backgroundColor: "#E4E9F2" };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, bgcolor]}>
        <Text style={styles.text}>{text}</Text>
        <Image
          style={styles.image}
          source={
            status == "pending"
              ? require("../../assets/icons8-autograph-50.png")
              : require("../../assets/icons8-done-30.png")
          }
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
    marginBottom: 14,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  image: {
    width: 20,
    height: 20,
  },
});

export default HouseAddressItem;
