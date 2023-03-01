import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  TextInput,
  FlatList,
  StyleSheet,
  StatusBar,
  Alert,
  Text,
  Pressable,
  Image
} from "react-native";
import serverApi from "../services/api";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Loading from "../components/Loading";

const Buscar = () => {
  const [searchText, setSearchText] = useState( "");
  const [receita, setReceitas] = useState();
  const [list, setList] = useState();
  const [loading, setLoading] = useState(true);
  console.log(searchText);
  const navigation = useNavigation();
  useEffect(() => {
    async function todosreceita() {
      try {
        const resposta = await axios.get(`${serverApi}/receitas.json`);
        const dados = await resposta.data;
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
        setList(listaDeReceitas);
      } catch (error) {
        console.log("Deu ruim na busca da API: " + error.message);
      }
    }
    todosreceita();
  }, []);

  /* filtro */

  const handleInputClick = () => {
    setSearchText("");
  };

  useEffect(() => {
    if (!searchText || !receita) {
      setList(receita || []);
    } else {
      setList(
        receita.filter(
          (item) =>
            item.titulo.toLowerCase().indexOf(searchText.toLowerCase()) >
              -1 ||
            item.categoria.toLowerCase().indexOf(searchText.toLowerCase()) > -1
        )
      );
    }
  }, [searchText, receita]);

  const verDetalhes = (receitaSelecionado) => {
    navigation.navigate("Detalhes", { receita: receitaSelecionado });
  };
  
  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.searchArea}>
        <TextInput
          style={estilos.input}
          placeholder="Pesquise uma receita"
          placeholderTextColor="#888"
          value={searchText}
          onChangeText={(texto) => {
            setSearchText(texto);
          }}
          onFocus={handleInputClick}
        />
      </View>      

      
      {searchText ? (
        <Text style={estilos.textoBusca}>
          Você pesquisou por :
          <Text style={{ fontWeight: "bold" }}> {searchText}</Text>
        </Text>
      ) : null}

      

      {searchText ? (
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <View key={item.id}>
              <Pressable
                onPress={verDetalhes.bind(this, item)}
                style={estilos.itemReceita}
              >
                <Image
                  source={{
                    uri: `http://10.20.48.26/servidor-imagens/${item.imagem}`,
                  }}
                  style={estilos.imagem}
                />
                <View style={estilos.descricao}>
                  <Text style={estilos.titulo}>{item.titulo}</Text>
                  <Text style={estilos.categoria}>
                    {item.categoria}
                  </Text>
                  <Text style={estilos.icones}>
                    <Ionicons
                      name="restaurant-outline"
                      size={16}
                      color="black"
                    />{" "}
                    {item.rendimento}{" "}
                    <MaterialCommunityIcons
                      name="timer-settings-outline"
                      size={16}
                      color="black"
                    />{" "}
                    {item.tempoDePreparo}
                  </Text>
                </View>
              </Pressable>
            </View>
          )}
          keyExtractor={(receita) => receita.id}
        />
      ) : null}

      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF6EE",
    marginBottom: 50,
    padding: 8
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: "#EBEBEB",
    margin: 20,
    borderRadius: 5,
    fontSize: 19,
    paddingLeft: 15,
    paddingRight: 15,
    color: "#000",
  },
  searchArea: {
    flexDirection: "row",
    alignItems: "center",
  },
  textoBusca: {
    fontSize: 16,
    paddingBottom: 4,
    marginLeft: 18,
  },
  itemReceita: {
    flexDirection: "row",
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    backgroundColor: "#f8f8f8",
    width: "100%",
  },
  cabecalho: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titulo: {
    fontFamily: "merienda",
    textTransform: "capitalize",
    
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  descricao: {
    width:"63%",
    alignItems: "center",
    padding: 18
  },
  categoria: {
    textTransform: "capitalize",
    fontFamily: "merienda",
    marginTop: 8,
  },
  icones: {
    fontFamily: "manrope",
    fontSize: 12,
    marginTop: 16,
  },
});

export default Buscar;