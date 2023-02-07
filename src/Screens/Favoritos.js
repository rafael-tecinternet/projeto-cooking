import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, navigation } from "@react-navigation/core";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Favoritos = () => {
  const [listaFavoritos, setListaFavoritos] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function carregarFavoritos() {
      try {
        const dados = await AsyncStorage.getItem("@favotitos");

        const receita = JSON.parse(dados);

        if (dados != null) {
          setListaFavoritos(receita);
        }
        console.log(dados);
      } catch (error) {
        console.log("Deu ruim no carregamento: " + error.message);
      }
    }
    carregarFavoritos();
  }, []);
};

const verDetalhes = (receitaSelecionada) => {
  navigation.navigate("Detalhes", { receita: receitaSelecionada });
};

async function excluirFavoritos() {
  Alert.alert(
    "Excluir TODOS?",
    "Tem certeza que deseja excluir TODAS as suas receitas?",
    [
      {
        text: "Cancelar",
        onPress: () => {
          return false;
        },
        style: "cancel", // para ios
      },
      {
        text: "Sim, desejo excluir",
        onPress: async () => {
          await AsyncStorage.removeItem("@favoritos");
          setListaFavoritos([]);
        },
        style: "destructive", // para ios
      },
    ]
  );
}

const excluirUmFavorito = async (indice) => {
  listaFavoritos.splice(indice, 1);

  await AsyncStorage.setItem("@favoritos", JSON.stringify(listaFavoritos));

  const listaDeReceita = JSON.parse(await AsyncStorage.getItem("@favoritos"));

  setListaFavoritos(listaDeReceita);

  return (
    <SafeAreaView style={estilos.safeContainer}>
      <View style={estilos.container}>
        <View style={estilos.cabecalho}>
          <Text> Quantidade: {listaFavoritos.length}</Text>
          <Pressable
            style={estilos.botaoExcluirTudo}
            onPress={excluirFavoritos}
          >
            <Text style={estilos.textoExcluirTudo}>
              <Ionicons name="trash-outline" size={16} /> Excluir Favoritos
            </Text>
          </Pressable>
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {listaFavoritos.map((receitaFavorita, indice) => {
            return (
              <Pressable
                onPress={() => verDetalhes(receitaFavorita)}
                key={receitaFavorita.id}
                style={estilos.itemReceita}
              >
                <Text style={estilos.titulo}>{receitaFavorita.title}</Text>
                <Pressable
                  style={estilos.botaoExcluir}
                  onPress={excluirUmFavorito.bind(this, indice)}
                >
                  {" "}
                  <Ionicons name="trash" size={18} color="white" />
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
  safeContainer: { flex: 1 },
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: "white",
  },
  itemFilme: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#ccc",
    marginVertical: 8,
    borderRadius: 4,
    alignItems: "center",
  },
  botaoExcluir: {
    backgroundColor: "#C0392B",
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
    borderColor: "#C0392B",
    padding: 8,
    borderRadius: 4,
  },
  textoExcluirTudo: { color: "red" },
  titulo: {
    flex: 1,
    fontSize: 14,
  },
});
