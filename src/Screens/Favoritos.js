import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import {
  Alert,
  Pressable,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  RefreshControl 
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Favoritos = () => {
  const [listaFavoritos, setListaFavoritos] = useState([]);
  const [refreshing, setRefreshing] = useState(false);


  const navigation = useNavigation();

  useEffect(() => {
    async function carregarFavoritos() {
      try {
        const dados = await AsyncStorage.getItem("@favoritos");
        const receita = JSON.parse(dados);
        if (dados != null) {
          setListaFavoritos(receita);
        }
      } catch (error) {
        console.log("Deu ruim no carregamento: " + error.message);
      }
    }
    carregarFavoritos();
  }, []);
  
  const atualizarFavoritos = async () => {
    setRefreshing(true);
    try {
      const dados = await AsyncStorage.getItem("@favoritos");
      const receita = JSON.parse(dados);
      if (dados != null) {
        setListaFavoritos(receita);
      }
    } catch (error) {
      console.log("Deu ruim no carregamento: " + error.message);
    }
    setRefreshing(false);
  }
  

  const verDetalhes = (receitaSelecionada) => {
    navigation.navigate("Detalhes", { receita: receitaSelecionada });
  };

  const excluirFavoritos = async () => {
    Alert.alert(
      "Excluir TODOS?",
      "Tem certeza que deseja excluir TODOS os favoritos ?",
      [
        {
          text: "Cancelar",
          onPress: () => {
            return false;
          },
          style: "cancel", // SOMENTE NO IOS
        },
        {
          text: "Sim",
          onPress: async () => {
            await AsyncStorage.removeItem("@favoritos");
            setListaFavoritos([]);
          },
          style: "destructive", //SOMENTE NO IOS
        },
      ]
    );
  };
  const excluirUmFavoritos = async (indice) => {
    Alert.alert(
      "Excluir ?",
      "Tem certeza que deseja excluir dos favoritos ?",
      [
        {
          text: "Cancelar",
          onPress: () => {
            return false;
          },
          style: "cancel", // SOMENTE NO IOS
        },
        {
          text: "Sim",
          onPress: async () => {
             
    listaFavoritos.splice(indice, 1);

    await AsyncStorage.setItem("@favoritos", JSON.stringify(listaFavoritos));

    const listaDeReceitas = JSON.parse(
      await AsyncStorage.getItem("@favoritos")
    );

    setListaFavoritos(listaDeReceitas);
          },
          style: "destructive", //SOMENTE NO IOS
        },
      ]
    );
   
  };
 
  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.cabecalho}>
        <Text>Quantidade: {listaFavoritos.length}</Text>
        <Pressable style={estilos.botaoExcluirTudo} onPress={excluirFavoritos}>
          <Text style={estilos.textoExcluirTudo}>
            <Ionicons name="trash-outline" size={16} />
            Excluir Favoritos
          </Text>
        </Pressable>
      </View>
      <FlatList
        data={listaFavoritos}
        renderItem={({ item, id }) => (
          <View key={item.id}>
            <Pressable
              onPress={verDetalhes.bind(this, item)}
              style={estilos.itemFilme}
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

                <Pressable
                  style={estilos.botaoExcluir}
                  onPress={excluirUmFavoritos.bind(this, id)}
                >
                  <Ionicons name="trash" size={16} color="white" />
                </Pressable>
            </Pressable>
          </View>
        )}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={atualizarFavoritos}
          />
        }      
      />

    </SafeAreaView>
  );
};

export default Favoritos;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF6EE",
    marginBottom: 50,
  },
  itemFilme: {
    flexDirection: "row",
    marginVertical: 8,
    borderRadius: 4,
    alignItems: "center",
    borderWidth: 1,
    backgroundColor: "#f8f8f8"
  },
  botaoExcluir: {
    backgroundColor: "#c0220b",
    padding: 8,
    borderRadius: 4,
  },
  cabecalho: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  botaoExcluirTudo: {
    borderWidth: 1,
    borderColor: "red",
    padding: 8,
    borderRadius: 4,
  },
  textoExcluirTudo: {
    color: "#c0220b",
  },
  titulo: {
    fontFamily: "merienda",
    textTransform: "capitalize",
    marginTop: 16,
    textAlign: "center",
  },
  imagem: {
    width: 150,
    height: 150,
  },
  descricao: {
    alignItems: "center",
    width: "55%",
    height: "100%",
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
