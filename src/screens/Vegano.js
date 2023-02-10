import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Vegano = () => {
  return (
    <View style={estilos.container}>
      <Text>Vegano</Text>
    </View>
  );
};

export default Vegano;

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#FCF6EE",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
