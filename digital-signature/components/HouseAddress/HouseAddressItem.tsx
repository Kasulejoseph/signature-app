import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";

type HouseAddressItemProps = {
  text: string;
  onPress: () => void;
};

const HouseAddressItem = ({ text, onPress }: HouseAddressItemProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <Image
          style={styles.image}
          source={require("../../assets/icons8-autograph-50.png")}
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
