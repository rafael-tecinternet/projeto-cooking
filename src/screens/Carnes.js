import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Carnes = () => {
  return (
    <View style={estilos.container}>
      <Text>Carnes</Text>
    </View>
  );
};

export default Carnes;

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#FCF6EE",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
