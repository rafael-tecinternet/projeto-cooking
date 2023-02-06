import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

const Detalhes = ({ navigation }) => {

  const [fonteCarregada] = useFonts({
    merienda: require("../../assets/fonts/Merienda-Bold.ttf"),
    manrope: require("../../assets/fonts/Manrope-Light.ttf"),
  });

  return (
    <View>
    <Text style={estilos.tituloReceita}>Titulo da receita</Text>
    <Text style={estilos.textoMaior}>Ingredientes</Text>
    <Text style={estilos.icones}>  Icone</Text>
    </View>
  )
}

export default Detalhes

const estilos = StyleSheet.create({
container: {

},
imagem: {

},
informacoes: {

},
texto: {

},
tituloReceita: {
  textTransform: "capitalize",
  padding: 8,
  fontFamily: "merienda",
  fontSize: 18,
},
textoMaior: {
  textTransform: "capitalize",
    padding: 8,
    fontFamily: "merienda",
    fontSize: 14,
}, icones: {
  fontFamily: "manrope",
  fontSize: 16,
}

})