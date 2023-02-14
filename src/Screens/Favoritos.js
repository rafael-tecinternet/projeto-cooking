import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Alert,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Favoritos = () => {
  const [listaFavoritos, setListaFavoritos] = useState([]);

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
    console.log(listaFavoritos);
  }, []);

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
    listaFavoritos.splice(indice, 1);

    await AsyncStorage.setItem("@favoritos", JSON.stringify(listaFavoritos));

    const listaDeReceitas = JSON.parse(
      await AsyncStorage.getItem("@favoritos")
    );

    setListaFavoritos(listaDeReceitas);
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
      {listaFavoritos.map((receitaFavorita, indice) => {
        return (
          <Pressable
            onPress={verDetalhes.bind(this, receitaFavorita)}
            key={receitaFavorita.id}
            style={estilos.itemFilme}
          >
            <Text style={estilos.titulo1}>{receitaFavorita.titulo}</Text>
            <View style={estilos.corpo} key={receitaFavorita.id}>
              <Pressable
                onPress={verDetalhes.bind(this, receitaFavorita)}
                key={receitaFavorita.id}
              >
                <Image
                  source={{
                    uri: `http://10.20.48.26/servidor-imagens/${receitaFavorita.imagem}`,
                  }}
                  style={estilos.imagem}
                />
              </Pressable>

              <View style={estilos.viewCategoria}>
                <Text style={estilos.icones}>
                  <Ionicons name="restaurant-outline" size={16} color="black" />{" "}
                  {receitaFavorita.rendimento}{" "}
                  <MaterialCommunityIcons
                    name="timer-settings-outline"
                    size={16}
                    color="black"
                  />{" "}
                  {receitaFavorita.tempoDePreparo}
                </Text>
                <Pressable
                  style={estilos.botaoExcluir}
                  // onPress={excluirUmFavoritos}
                  // onPress={() => excluirUmFavoritos(indice)}
                  onPress={excluirUmFavoritos.bind(this, indice)}
                >
                  <Text>
                    <Ionicons name="trash" size={16} color="white" /> Excluir
                    receita
                  </Text>
                </Pressable>
              </View>
            </View>
          </Pressable>
        );
      })}
    </SafeAreaView>
  );
};

export default Favoritos;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCF6EE",
    alignItems: "center",
  },
  titulo1: {
    fontSize: 18.5,
    padding: 16,
    fontFamily: "merienda",
    textTransform: "capitalize",
    textAlign: "center",
  },
  corpo: {
    backgroundColor: "gold",
    flexDirection: "row",
  },
  icones: {
    fontFamily: "manrope",
    fontSize: 12,
    paddingTop: 6,
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 8,
  },
  categoria: {
    textTransform: "capitalize",
    padding: 8,
    fontFamily: "merienda",
    fontSize: 16,
  },
  viewCategoria: {
    alignItems: "center",
    backgroundColor: "pink",
    justifyContent: "space-around",
    width: "100%",
  },
  botaoExcluir: {
    backgroundColor: "#c0220b",
    padding: 8,
    borderRadius: 4,
    color: "white",
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
  cabecalho: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 8,
  },
  itemFilme: {
    padding: 8,
    backgroundColor: "#d3d3d3",
    width: "100%",
  },
});
