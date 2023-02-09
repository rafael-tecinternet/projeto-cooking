import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/core";
import { Vibration } from "react-native";

const SalvarReceita = ({ receita }) => {
  const navigation = useNavigation();
  const leiaMais = () => {
    navigation.navigate("Detalhes", { receita });
  };

  const { title } = receita;
  const salvar = async () => {
    const receitaFavorita = await AsyncStorage.getItem("@favoritos");

    let listaDeReceita = JSON.parse(receitaFavorita);

    if (!listaDeReceita) {
      listaDeReceita = [];
    }

    for (let receitasExistentes in listaDeReceita) {
      if (listaDeReceita[receitasExistentes].id == receita.id) {
        Alert.alert("Ops!", "Você já salvou essa receita!");
        Vibration.vibrate();
        return;
      }
    }

    listaDeReceita.push(receita);

    await AsyncStorage.setItem("@favoritos", JSON.stringify(listaDeReceita));

    Alert.alert("Favoritos", "Receita salva com sucesso!");
  };

  return (
    <View style={estilos.card}>
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}>{title}</Text>

        <View style={estilos.botoes}>
          <Pressable style={estilos.botao} onPress={leiaMais}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="book" size={12} color="#5451a6" /> Leia mais
            </Text>
          </Pressable>

          <Pressable style={estilos.botao} onPress={salvar}>
            <Text style={estilos.textoBotao}>
              <Ionicons name="add-circle" size={12} color="#5451a6" />
              Salvar
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default SalvarReceita;

const estilos = StyleSheet.create({
  card: {
    marginVertical: 4,
    flexDirection: "row",
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "black",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imagem: {
    flex: 1,
    height: 150,
    width: 100,
  },
  corpo: {
    flex: 2,
  },
  titulo: {
    backgroundColor: "#C20000",
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
  },
  textoBotao: {
    color: "#C20000",
    fontSize: 12,
    textTransform: "uppercase",
  },
});
