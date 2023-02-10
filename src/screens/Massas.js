import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Massas = () => {
  return (
    <View style={estilos.container}>
      <Text>Massas</Text>
    </View>
  );
};

export default Massas;

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#FCF6EE",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
