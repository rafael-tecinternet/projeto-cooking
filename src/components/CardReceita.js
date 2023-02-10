// Importe o AsyncStorage do expo. Não use do react-native padrão
import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert,
  Vibration,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import fotoAlternativa from "../../assets/images/foto-alternativa.jpg";

const CardReceita = ({ receita }) => {
  const { ingredientes } = receita;

  /* Acessar recursos do React Navigation (sem props!) */
  const navigation = useNavigation();

  const leiaMais = () => {
    navigation.navigate("Detalhes", { receita });
  };

  const salvar = async () => {
    //return Alert.alert("Favoritos", "Salvando...");

    /* Etapas para uso do AsyncStorage */
    // 1) Carregamento do storage do aparelho (se houver, caso contrário retorna null)
    const receitasFavoritas = await AsyncStorage.getItem("@favoritos");

    // 2) Havendo storage prévio, transformamos os dados do filme em objeto e os guardamos numa lista (array)
    let listaDeFilmes = JSON.parse(filmesFavoritos);

    // 3) Se a lista for indefinida, vamos iniciá-la como um array vazio
    if (!listaDeFilmes) {
      listaDeFilmes = [];
    }

    /* Etapa de verificação de filme já salvo */

    /* Para cada filme existente na listaDeFilmes (se existir) */
    for (let filmeExistente in listaDeFilmes) {
      /* Verificamos se o id do filme existente é igual ao id do
      filme do card (que está na tela) */
      if (listaDeFilmes[filmeExistente].id == filme.id) {
        Alert.alert("Ops!", "Você já salvou este filme!");
        Vibration.vibrate();
        return;
      }
    }

    // 4) Adicionamos os dados do filme na lista (array)
    listaDeFilmes.push(filme);

    // 5) Finalmente, salvamos COMO STRING no storage do dispositivo
    await AsyncStorage.setItem("@favoritos", JSON.stringify(listaDeFilmes));

    Alert.alert("Favoritos", "Filme salvo com sucesso!");
  };

  return (
    <View style={estilos.card}>
      <Image
        style={estilos.imagem}
        resizeMode="cover"
        source={
          poster_path
            ? {
                uri: `https://image.tmdb.org/t/p/original/${poster_path}`,
              }
            : fotoAlternativa
        }
      />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}> {title} </Text>

        <View style={estilos.botoes}>
          <Pressable style={estilos.botao} onPress={leiaMais}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="book" size={12} /> Leia mais
            </Text>
          </Pressable>

          <Pressable style={estilos.botao} onPress={salvar}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="add-circle" size={12} /> Salvar
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default CardFilme;

const estilos = StyleSheet.create({
  card: {
    marginVertical: 4,
    flexDirection: "row",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#5451a6",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imagem: {
    flex: 1,
    height: 150,
    width: 100,
  },
  corpo: { flex: 2 },
  titulo: {
    backgroundColor: "#5451a6",
    color: "white",
    fontSize: 16,
    paddingVertical: 8,
    textAlign: "center",
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8,
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
