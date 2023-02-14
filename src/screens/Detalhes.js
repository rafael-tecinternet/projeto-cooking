import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
  Pressable,
  Alert,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { SafeAreaView } from "react-native-safe-area-context";
const Detalhes = ({ route }) => {
  const { receita } = route.params;
  const [fonteCarregada] = useFonts({
    merienda: require("../../assets/fonts/Merienda-Bold.ttf"),
    manrope: require("../../assets/fonts/Manrope-Light.ttf"),
  });

  const salvar = async () => {
    const receitasFavoritas = await AsyncStorage.getItem("@favoritos");

    let listaDeReceitas = JSON.parse(receitasFavoritas);

    if (!listaDeReceitas) {
      listaDeReceitas = [];
    }

    for (let receitaExistente in listaDeReceitas) {
      if (listaDeReceitas[receitaExistente].id == receita.id) {
        Alert.alert("Ops!", "Você já salvou este receita!");
        Vibration.vibrate();
        return;
      }
    }

    listaDeReceitas.push(receita);

    await AsyncStorage.setItem("@favoritos", JSON.stringify(listaDeReceitas));
    Alert.alert("Favoritos", "receita salva com sucesso!");
  };

  if (!fonteCarregada) return <Text>Fonte sendo carregada...</Text>;

  return (
    <SafeAreaView style={estilos.container}>
      <ScrollView>
        <Image
          source={{
            uri: `http://10.20.48.26/servidor-imagens/${receita.imagem}`,
          }}
          style={estilos.imagem}
        />
        <Text style={estilos.titulo}>{receita.titulo}</Text>

        <Text style={estilos.icones}>
          <Ionicons name="restaurant-outline" size={16} color="black" />{" "}
          {receita.rendimento}{" "}
          <MaterialCommunityIcons
            name="timer-settings-outline"
            size={16}
            color="black"
          />{" "}
          {receita.tempoDePreparo}
        </Text>

        <View>
          <Pressable style={estilos.botao} onPress={salvar}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="star" size={16} color={"gold"} /> Salvar
            </Text>
          </Pressable>
        </View>

        <View style={estilos.lista}>
          <Text style={estilos.titulo1}>Ingredientes:</Text>
          <FlatList
            data={receita.ingredientes}
            renderItem={({ item }) => (
              <Text style={estilos.texto}>{item}.</Text>
            )}
          />
        </View>
        <View style={estilos.lista}>
          <Text style={estilos.titulo1}>Modo de Preparo:</Text>
          <FlatList
            data={receita.modoDePreparo}
            renderItem={({ item }) => <Text style={estilos.texto}>{item}</Text>}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Detalhes;

const estilos = StyleSheet.create({
  container: { flex: 1 },
  imagem: {
    height: 250,
  },
  titulo: {
    fontSize: 18,
    fontFamily: "merienda",
    padding: 16,
  },
  icones: {
    paddingStart: 16,
    fontFamily: "manrope",
  },
  lista: {
    margin: 16,
  },
  titulo1: {
    fontSize: 16,
    fontFamily: "merienda",
    marginVertical: 16,
  },
  texto: {
    fontFamily: "manrope",
    fontSize: 15,
    marginBottom: 16,
  },
  botao: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#5451a6",
  },
  textoBotao: {
    color: "#5451a6",
    fontSize: 12,
    textTransform: "uppercase",
  },
});
