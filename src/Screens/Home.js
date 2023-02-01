import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
  FlatList,
  Item,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState } from "react";
import serverApi from "../services/api";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
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
        // console.log(receitas);
        // console.log(`../../assets/images/${listaDeReceitas.imagem}`);
        // console.log(listaDeReceitas);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getReceitas();
  }, []);

  return (
    <SafeAreaView style={estilos.container}>
      {/* <FlatList
        data={receitas}
        renderItem={({ item }) => (
          <View>
            <Text>{item.modoDePreparo}</Text>
          </View>
        )}
      /> */}
      <ScrollView>
        {receitas.map(({ imagem, id, tempoDePreparo, rendimento, titulo }) => (
          <View style={estilos.corpo} key={id}>
            <Text style={estilos.titulo1}>{titulo}</Text>

            <Image
              source={{ uri: `http://10.20.45.48/servidor-imagens/${imagem}` }}
              style={estilos.imagem}
            />
            <Text style={estilos.icones}>
              <Ionicons name="restaurant-outline" size={20} color="black" />
              {rendimento}
              <MaterialCommunityIcons
                name="timer-settings-outline"
                size={20}
                color="black"
              />
              {tempoDePreparo}
            </Text>
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
    marginBottom: 40,
    backgroundColor: "#FCF6EE",
    alignItems: "center",
    paddingBottom: 40,
  },
  titulo1: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    padding: 8,
  },
  corpo: {
    padding: 8,
    justifyContent: "space-between",
    marginVertical: 8,
    alignItems: "center",
    width: 350,
    height: 250,
  },
  icones: {
    padding: 8,
  },
  imagem: {
    width: 350,
    height: 180,
    borderRadius: 16,
  },
});
