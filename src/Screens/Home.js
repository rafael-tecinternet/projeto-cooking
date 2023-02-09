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
  Pressable,
  Button,
} from "react-native";
import React, { useEffect, useState } from "react";
import serverApi from "../services/api";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

const Home = ({navigation}) => {
  const [fonteCarregada] = useFonts({
    merienda: require("../../assets/fonts/Merienda-Bold.ttf"),
    manrope: require("../../assets/fonts/Manrope-Light.ttf"),
  });

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
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getReceitas();
  }, []);
  if (!fonteCarregada) return <Text>Fonte sendo carregada...</Text>;
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
      

      <ScrollView style={estilos.view}>

      
      <View style={estilos.botaoBusca}>
        <Button color={"red"} title="Escolha seus ingredientes" onPress={() => {
        navigation.navigate("Buscar")
      }}></Button></View>
      

      

     

        {receitas.map(
          ({ imagem, id, tempoDePreparo, rendimento, titulo, categoria }) => (
            <View style={estilos.corpo} key={id}>
              
              <Text style={estilos.titulo1}>{titulo}</Text>
              
              
              
              <Pressable onPress={() => {
            navigation.navigate("Detalhes");
          }}>
              <Image
                source={{
                  uri: `http://10.20.45.48/servidor-imagens/${imagem}`,
                }}
                style={estilos.imagem}
                
              />
              </Pressable>

              
              
              <Text style={estilos.categoria}> {categoria}</Text>
              <Text style={estilos.icones}>
                <Ionicons name="restaurant-outline" size={16} color="black" />{" "}
                {rendimento}
                {"   "}
                <MaterialCommunityIcons
                  name="timer-settings-outline"
                  size={16}
                  color="black"
                />{" "}
                {tempoDePreparo}
              </Text>
            </View>
            
          )
        )}
      </ScrollView>
    </SafeAreaView>
    
  );
};

export default Home;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF6EE",
    alignItems: "center"
  },
  titulo1: {
    color: "black",
    fontSize: 20,
    padding: 16,
    fontFamily: "merienda",
    textTransform: "capitalize",
    textAlign: "center",
  },
  corpo: {
    marginVertical: 30,
    width: "100%",
    height: 340,
    alignItems: "center",
  },
  icones: {
    fontFamily: "manrope",
    fontSize: 16,
  },
  imagem: {
    width: 350,
    height: 190,
    borderRadius: 16,
  },
  categoria: {
    textTransform: "capitalize",
    padding: 8,
    fontFamily: "merienda",
    fontSize: 18,
  }, botaoBusca: {
   alignItems:"center",
    width: 350,
    paddingTop:32,

  }
});
