import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from "@expo/vector-icons";


const Detalhes = ({ navigation }) => {

  const [fonteCarregada] = useFonts({
    merienda: require("../../assets/fonts/Merienda-Bold.ttf"),
    manrope: require("../../assets/fonts/Manrope-Light.ttf"),
  });

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewImagem}>

      <Text>Teste</Text>
      </View>


    <Text style={estilos.tituloReceita}>Titulo da receita</Text>
    {/* Icones de minutos e porções */}
    <Text style={estilos.icones}>
      <MaterialCommunityIcons
      name="timer-settings-outline"
      size={16}
      color="black"
      />{" "}Minutos
      <Ionicons name="restaurant-outline" size={16} color="black" />{" "}Porções
    
    </Text>

    {/* TEXTO MAIOR INGREDIENTES */}
    <View style={estilos.ViewTexto}>
    <Text style={estilos.textoMaior}>Ingredientes</Text>
    
    {/* TEXTO MENOR INGREDIENTES */}
    <Text style={estilos.textoMenor}>
      1 Lata de creme de leite
    </Text>
    </View>
    </SafeAreaView>
  )
}

export default Detalhes

const estilos = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#FCF6EE",
  alignItems: "center"
},
viewImagem: {
backgroundColor: "red",
width: 400,
height: 200

},
ViewTexto: {
backgroundColor: "red",
marginTop: 30,
marginBottom: 8,
paddingRight: 100,
paddingBottom: 30,
},
textoMenor: {
textAlign: "left"
},
tituloReceita: {
  textTransform: "capitalize",
  padding: 8,
  fontFamily: "merienda",
  fontSize: 18,
},
textoMaior: {
  textTransform: "capitalize",
    
    fontFamily: "merienda",
    fontSize: 16,
    
}, icones: {
  fontFamily: "manrope",
  fontSize: 16,
}

})