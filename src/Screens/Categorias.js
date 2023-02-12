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
//import imagemCategoria from "../../assets/images/paleta_de_boi.jpg"

 //Acessando recursos do React Navigation (sem props!)
  const navigation = useNavigation();

  const navegacaoCategorias = () => {
  navigation.navigate();
 };

const Categorias = ({ navigation }) => {
  const [fonteCarregada] = useFonts({
    merienda: require("../../assets/fonts/Merienda-Bold.ttf"),
    manrope: require("../../assets/fonts/Manrope-Light.ttf"),
  });

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
          <Text>Salgados</Text>
        </Pressable>

        <Pressable
          style={estilos.cardCategoria}
          onPress={() => navigation.navigate("Vegano", {})}
        >
          <Text>vegano</Text>
        </Pressable>
      </View>
      <View style={estilos.categoriaMeio}>
        <Pressable onPress={() => navigation.navigate("Molhos", {})}>
          <Text style={estilos.cardCategoria}>Molhos</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Carnes", {})}>
          <Text style={estilos.cardCategoria}>Carnes</Text>
        </Pressable>
      </View>
      <View style={estilos.categoriaInferior}>
        <Pressable onPress={() => navigation.navigate("Doces", {})}>
          <Text style={estilos.cardCategoria}>Doces</Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Massas", {})}>
          <Text style={estilos.cardCategoria}>Massas</Text>
        </Pressable>

        {/* <Image
          style={estilos.tinyLogo}
          source={{
            src={"../../assets/images/paleta_de_boi.jpg"},
            
          }}
        /> */}
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
  imagem: {
    paddingTop: 50,
    width: 100,
    height: 100,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    paddingTop: 50,
    width: 100,
    height: 100,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
