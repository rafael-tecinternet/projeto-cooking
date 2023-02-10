import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Salgados = (props) => {
  return (
    <View style={estilos.container}>
      <Text>Salgados</Text>
    </View>
  );
};

export default Salgados;

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#FCF6EE",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
// Aqui criamos uma função que ainda não faço muita ideia
