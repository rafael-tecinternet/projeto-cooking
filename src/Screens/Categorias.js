import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";

// Acessando recursos do React Navigation (sem props!)
//const navigation = useNavigation();

// const navegacaoCategorias = () => {
//   navigation.navigate();
// };

const Categorias = () => {
  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.categoriaSuperior}>
        <Pressable
          style={estilos.cardCategoria}
          onPress={() => navigation.navigate("Salgados")}
        >
          <Text>Salgados</Text>
        </Pressable>

        <Pressable style={estilos.cardCategoria}>
          <Text>vegano</Text>
        </Pressable>
      </View>
      <View style={estilos.categoriaMeio}>
        <Text style={estilos.cardCategoria}>Molhos</Text>
        <Text style={estilos.cardCategoria}>Carnes</Text>
      </View>
      <View style={estilos.categoriaInferior}>
        <Text style={estilos.cardCategoria}>Doces</Text>
        <Text style={estilos.cardCategoria}>Massas</Text>
      </View>
    </SafeAreaView>
  );
};

export default Categorias;

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  categoriaSuperior: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "80%",
    padding: 30,
  },
  categoriaMeio: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "80%",
    padding: 30,
  },
  categoriaInferior: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "80%",
    padding: 30,
  },
  cardCategoria: {
    backgroundColor: "#FFD43D",
    width: 100,
    height: 100,
    margin: 6,
  },
});
