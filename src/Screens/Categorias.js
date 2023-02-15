import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Image,
} from "react-native";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import imagemCategoria from "../../assets/images/paleta_de_boi.jpg";
import serverApi from "../services/api";

const Categorias = () => {
  const [fonteCarregada] = useFonts({
    merienda: require("../../assets/fonts/Merienda-Bold.ttf"),
    manrope: require("../../assets/fonts/Manrope-Light.ttf"),
  });
  const navigation = useNavigation();

  function Header() {
    // Import result is the URL of your image
    return <img src={logo} alt="Logo" />;
  }

  const [receita, setReceitas] = useState([]);

  useEffect(() => {
    async function getReceitas() {
      try {
        const resposta = await fetch(`${serverApi}/receitas.json`);
        const dados = await resposta.json();
        let listaDeReceitas = [];
        for (const receita in dados) {
          const objetoReceita = {
            id: receita,
            titulo: dados[receita].titulo,
            ingredientes: dados[receita].ingredientes,
            modoDePreparo: dados[receita].modoDePreparo,
            rendimento: dados[receita].rendimento,
            tempoDePreparo: dados[receita].tempoDePreparo,
            categoria: dados[receita].categoria,
            imagem: dados[receita].imagem,
          };
          listaDeReceitas.push(objetoReceita);
        }
        setReceitas(listaDeReceitas);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getReceitas();
  }, []);

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.categoriaSuperior}>
        <Pressable
          style={estilos.cardCategoria}
          onPress={() => navigation.navigate("Salgados", {})}
        >
          <Text style={estilos.textoCategorias}>Salgados</Text>
          <Image
            style={estilos.tinyLogo}
            source={require("../../assets/images/risole_de_abobora_com_carne_seca.jpg")}
          />
        </Pressable>

        <Pressable
          style={estilos.cardCategoria}
          onPress={() => navigation.navigate("Vegano", {})}
        >
          <Text style={estilos.textoCategorias}>Vegano</Text>
          <Image
            style={estilos.tinyLogo}
            source={require("../../assets/images/chutney_de_caju.jpg")}
          />
        </Pressable>
      </View>
      <View style={estilos.categoriaMeio}>
        <Pressable onPress={() => navigation.navigate("Molhos", {})}>
          <Text style={estilos.textoCategorias}>Molhos</Text>
          <Image
            style={estilos.tinyLogo}
            source={require("../../assets/images/molho_rose.jpg")}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Carnes", {})}>
          <Text style={estilos.textoCategorias}>Carnes</Text>
          <Image
            style={estilos.tinyLogo}
            source={require("../../assets/images/paleta_de_boi.jpg")}
          />
        </Pressable>
      </View>
      <View style={estilos.categoriaInferior}>
        <Pressable onPress={() => navigation.navigate("Doces", {})}>
          <Text style={estilos.textoCategorias}>Doces</Text>
          <Image
            style={estilos.tinyLogo}
            source={require("../../assets/images/bombomCereja.jpg")}
          />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Massas", {})}>
          <Text style={estilos.textoCategorias}>Massas</Text>
          <Image
            style={estilos.tinyLogo}
            source={require("../../assets/images/carbonara_light.jpg")}
          />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Categorias;

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#FCF6EE",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  categoriaSuperior: {
    marginTop: 50,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "100%",
  },
  categoriaMeio: {
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "100%",
  },
  categoriaInferior: {
    marginBottom: 100,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    width: "100%",
  },

  tinyLogo: {
    marginTop: 5,
    width: 145,
    height: 140,
    margin: 10,
    borderRadius: 6,
    borderStyle: "solid",
    justifyContent: "space-around",
  },
  textoCategorias: {
    paddingLeft: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    fontFamily: "merienda",
    fontWeight: "bold",
    fontSize: 19,
    color: "#262626",
  },
});
