import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
  Item
} from "react-native";
import React, { useEffect, useState } from "react";
import serverApi from "../services/api";

const Home = () => {
  const [receitas, setReceitas] = useState([]);

  useEffect(() => {
    async function getReceitas() {
      try {
        const resposta = await fetch(`${serverApi}/receitas.json`);
        const dados = await resposta.json();
        let listaDeReceitas = [];
        for (const receita in dados) {
          const objetoReceita = {
            id: receita,
            titulo: dados[receita].titulo,
            ingredientes: dados[receita].ingredientes,
            modoDePreparo: dados[receita].modoDePreparo,
            rendimento: dados[receita].rendimento,
            tempoDePreparo: dados[receita].tempoDePreparo,
            categoria: dados[receita].categoria,
            imagem: dados[receita].imagem,
          };
          listaDeReceitas.push(objetoReceita);
        }

        setReceitas(listaDeReceitas);
        console.log(receitas);
        console.log(listaDeReceitas);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getReceitas();
  }, []);

  return (
    <SafeAreaView style={estilos.container}>
      <ScrollView
      >
        {receitas.map(({ titulo, id, ingredientes }) => (
          <View style={estilos.corpo}>
            <Text style={estilos.titulo1}>{ingredientes}</Text>
          </View>
          
        ))}
      </ScrollView>
    </SafeAreaView>
    
  );
};

export default Home;

const estilos = StyleSheet.create({

  container: {
    flex: 1,
   marginBottom:40
  },
  titulo1: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    padding: 8,
  },
});
