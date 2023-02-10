import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Doces = () => {
  return (
    <View style={estilos.container}>
      <Text>Doces</Text>
    </View>
  );
};

export default Doces;

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#FCF6EE",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
