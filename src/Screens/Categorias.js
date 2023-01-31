import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useFonts } from "expo-font";

const Categorias = () => {
  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.categoriaSuperior}>
        <Text style={estilos.cardCategoria}>Salgados</Text>
        <Text style={estilos.cardCategoria}>vegano</Text>
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
