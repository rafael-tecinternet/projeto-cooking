import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Molhos = () => {
  return (
    <View style={estilos.container}>
      <Text>Molhos</Text>
    </View>
  );
};

export default Molhos;

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#FCF6EE",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
