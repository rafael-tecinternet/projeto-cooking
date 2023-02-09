import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from "react";

import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import serverApi from "../services/api";


const Detalhes = ({ route }) => {

  const { receita } = route.params;

  const [fonteCarregada] = useFonts({
    merienda: require("../../assets/fonts/Merienda-Bold.ttf"),
    manrope: require("../../assets/fonts/Manrope-Light.ttf"),
  });

  

  return (
    <SafeAreaView style={estilos.container}>
      <ScrollView style={estilos.view}>


      <View style={estilos.viewImagem}>

      <Text>Teste</Text>
      </View>


    <Text style={estilos.tituloReceita}>{receita.titulo}</Text>
    {/* Icones de minutos e porções */}
    <Text style={estilos.icones}>
      <MaterialCommunityIcons
      name="timer-settings-outline"
      size={16}
      color="black"
      />{" "}Minutos
      <Ionicons name="restaurant-outline" size={16} color="black" />{" "}Porções
      <Ionicons name="bookmark-outline" size={24} color="black" />
      Salvar receita
      
      
    
    </Text>

    {/* TEXTO MAIOR INGREDIENTES */}
    <View style={estilos.ViewTexto}>
    <Text style={estilos.textoMaior}>Ingredientes</Text>
    
    {/* TEXTO MENOR INGREDIENTES */}
    <Text style={estilos.textoMenor}>
      1 Lata de creme de leite
    </Text>
    
    <Text style={estilos.textoMenor}>
      1 Lata de milho verde
    </Text>
    <Text style={estilos.textoMenor}>
      1 copo de requeijão cremoso
    </Text>
    <Text style={estilos.textoMenor}>
      1 copo de requeijão cremoso
    </Text>

    <Text style={estilos.textoMenor}>
      1 copo de requeijão cremoso
    </Text>

    <Text style={estilos.textoMenor}>
      1 copo de requeijão cremoso
    </Text>
    <Text style={estilos.textoMenor}>
      1 copo de requeijão cremoso
    </Text>
    <Text style={estilos.textoMenor}>
      1 copo de requeijão cremoso
    </Text>

    <Text style={estilos.textoMaior}>Modo de preparo</Text>
    
    <Text style={estilos.textoMenor}>
      fjdsfbjhsbdfgbbdsfhbghbjdfbsgjbjhsdbfghbbdsfhhgbdsfgjbdsfbjgbsjdbjgfbdsjbjhsfgbdhbgjsfdbgsfdbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkktttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
    </Text>

    <Text style={estilos.textoMenor}>
      fjdsfbjhsbdfgbbdsfhbghbjdfbsgjbjhsdbfghbbdsfhhgbdsfgjbdsfbjgbsjdbjgfbdsjbjhsfgbdhbgjsfdbgsfdbkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkktttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttt
    </Text>

    <Text style={estilos.textoMenor}>
    <Ionicons name="bookmark-outline" size={24} color="black" />
      Salvar receita
    </Text>
    </View>

    <Text style={estilos.icones}>
    <Ionicons name="bookmark-outline" size={24} color="black" />
      Salvar receita
      
    
    </Text>

    </ScrollView>
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
  marginBottom: 8,
  paddingRight: 100,
  paddingBottom: 30,
  
},
textoMenor: {
  textAlign: "left",
  fontFamily: "manrope",
  fontSize: 16,
  marginLeft: 75,
  
},
tituloReceita: {
  textTransform: "capitalize",
  padding: 8,
  fontFamily: "merienda",
  fontSize: 22,
  textAlign: "center"
},
textoMaior: {
  textTransform: "capitalize",
  textAlign: "left",
  fontFamily: "merienda",
  fontSize: 16,
  marginLeft: 75,
  marginTop: 15   
}, icones: {
  fontFamily: "manrope",
  fontSize: 16,
  textAlign: "center"
},


})