import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Favoritos = () => {
  const [listaFavoritos, setListaFavoritos] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    async function carregarFavoritos() {
      try {
        // acessar o storage @favoritos e tentar carregar os dados existentes
        const dados = await AsyncStorage.getItem("@favoritos");

        //havendo dados, transformamos eles em array de objetos
        const receitas = JSON.parse(dados);

        // se realmente tem dados (ou seja, não é null), atualizamos o componente
        if (dados != null) {
          setListaFavoritos(receitas); // state de dados do componente
        }
        console.log(dados);
      } catch (error) {
        console.log("boa sorte resolvendo isso: " + error.message);
      }
    }

    carregarFavoritos();
  }, []);

  const verDetalhes = (receitaSelecionada) => {
    navigation.navigate("Detalhes", { receita: receitaSelecionada});
  };

  const excluirFavoritos = async () => {
    // usamos o removeItem para apagar somente os dados dos @favoritos do nosso app
    Alert.alert(
      "Excluir TODOS?",
      "Tem certeza que deseja excluir TODOS os favoritos?",
      [
        {
          text: "cancelar",
          onPress: () => {
            return false;
          },
          style: "cancel", // SOMENTE NO IOS
        },
        {
          text: "Sim, exclua",
          onPress: async () => {
            await AsyncStorage.removeItem("@favoritos");
            setListaFavoritos([]);
          },
          style: "destructive", // SOMENTE NO IOS
        },
      ]
    );
  };
  const excluirUmFavorito = async (indice) => {
    // Alert.alert(`excluir filme no indice: ${indice}`);

    /* Etapas para exclusão do filme escolhido */

    // 1) conhecendo o indice, remover o elemento (filme do array listaFavoritos)
    listaFavoritos.splice(indice, 1);
    /* splice: indicamos o indice de referencia (na pratica, o indice do filme que queremos remover e, a partir deste indice, a quantidade de elementos que queremos remover. como aqui queremos apagar somente o proprio filme escolhido, passamos 1) */

    // 2) atualizar o storage com a lista atualizada (ou seja, sem o filme)
    await AsyncStorage.setItem("@favoritos", JSON.stringify(listaFavoritos));

    // 3) recarregar do storage a nova lista de favoritos
    /* obs: é necessario transformar em array/objetos antes de manipular na aplicação */
    const listaDeFilmes = JSON.parse(await AsyncStorage.getItem("@favoritos"));

    // 4) atualizar o state para um novo render na tela com a lista de favoritos
    setListaFavoritos(listaDeFilmes);
  };
  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <View style={estilos.cabecalho}>
          <Text>Quantidade: {listaFavoritos.length}</Text>
          <Pressable
            style={estilos.botaoExcluirTudo}
            onPress={excluirFavoritos}
          >
            <Text style={estilos.textoExcluirTudo}>
              <Ionicons name="trash-outline" size={16} /> Excluir favoritos
            </Text>
          </Pressable>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {listaFavoritos.map((filmeFavorito, indice) => {
            return (
              <Pressable
                onPress={() => verDetalhes(filmeFavorito)}
                key={filmeFavorito.id}
                style={estilos.itemFilme}
              >
                <Text style={estilos.titulo}> {filmeFavorito.title}</Text>
                <Pressable
                  style={estilos.botaoExcluir}
                  // onPress={excluirUmFavorito}
                  onPress={() => excluirUmFavorito(indice)}
                >
                  <Ionicons name="trash" size={16} color={"white"} />
                </Pressable>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Favoritos;

const estilos = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "white",
  },
  itemFilme: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#eee8fc",
    marginVertical: 8,
    borderRadius: 4,
    alignItems: "center",
  },
  botaoExcluir: {
    backgroundColor: "#c0392B",
    borderRadius: 10,
    padding: 12,
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
    color: "red",
  },
  titulo: {
    flex: 1,
    fontSize: 12,
  },
});
