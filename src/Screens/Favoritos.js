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
      <ScrollView>
        {listaFavoritos.map((receitaFavorita, indice) => {
          return (
            <View>
              <Pressable
                // onPress={verDetalhes}
                // onPress={() => verDetalhes(filmeFavoritos)}
                onPress={verDetalhes.bind(this, receitaFavorita)}
                key={receitaFavorita.id}
                style={estilos.itemFilme}
              >
                <Image
                  source={{
                    uri: `http://10.20.48.26/servidor-imagens/${receitaFavorita.imagem}`,
                  }}
                  style={estilos.imagem}
                />
                <View style={estilos.descricao}>
                  <Text style={estilos.titulo}>{receitaFavorita.titulo}</Text>
                  <Text style={estilos.categoria}>
                    {receitaFavorita.categoria}
                  </Text>
                  <Text style={estilos.icones}>
                    <Ionicons
                      name="restaurant-outline"
                      size={16}
                      color="black"
                    />{" "}
                    {receitaFavorita.rendimento}{" "}
                    <MaterialCommunityIcons
                      name="timer-settings-outline"
                      size={16}
                      color="black"
                    />{" "}
                    {receitaFavorita.tempoDePreparo}
                  </Text>
                </View>

                <Pressable
                  style={estilos.botaoExcluir}
                  // onPress={excluirUmFavoritos}
                  // onPress={() => excluirUmFavoritos(indice)}
                  onPress={excluirUmFavoritos.bind(this, indice)}
                >
                  <Ionicons name="trash" size={16} color="white" />
                </Pressable>
              </Pressable>
            </View>
          );
        })}
      </ScrollView>
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
    backgroundColor: "#cccccc",
    marginVertical: 8,
    borderRadius: 4,
    alignItems: "center",
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
