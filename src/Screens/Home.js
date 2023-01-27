import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import serverApi from "../services/api";
import { useParams } from "react-router-dom";

const Home = () => {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    async function getReceitas() {
      try {
        const resposta = await fetch(`${serverApi}/receitas.json`);
        const dados = await resposta.json();
        console.log(receitas);
        setReceitas(dados);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getReceitas();
  }, []);

  return (
    <SafeAreaView style={estilos.container}>
      <View>
        <View style={estilos.titulo}>{receitas.id}</View>
        <Text> </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    color: "black",
    fontWeight: "bold",
    fontSize: 16,
  },
});
