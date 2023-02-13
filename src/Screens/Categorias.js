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
import imagemCategoria from "../../assets/images/paleta_de_boi.jpg"

 //Acessando recursos do React Navigation (sem props!)
//   const navigation = useNavigation();

//   const navegacaoCategorias = () => {
//   navigation.navigate();
//  };

const Categorias = ({ navigation }) => {
  const [fonteCarregada] = useFonts({
    merienda: require("../../assets/fonts/Merienda-Bold.ttf"),
    manrope: require("../../assets/fonts/Manrope-Light.ttf"),
  });

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
          <Image style={estilos.tinyLogo} source={require('../../assets/images/risole_de_abobora_com_carne_seca.jpg')}/> 
        </Pressable>

        <Pressable
          style={estilos.cardCategoria}
          onPress={() => navigation.navigate("Vegano", {})}
        >
          <Image style={estilos.tinyLogo} source={require('../../assets/images/chutney_de_caju.jpg')}/> 
        </Pressable>
      </View>
      <View style={estilos.categoriaMeio}>
        <Pressable onPress={() => navigation.navigate("Molhos", {})}>
        <Image style={estilos.tinyLogo} source={require('../../assets/images/molho_rose.jpg')}/> 
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Carnes", {})}>
        <Image style={estilos.tinyLogo} source={require('../../assets/images/paleta_de_boi.jpg')}/> 
        </Pressable>
      </View>
      <View style={estilos.categoriaInferior}>
        <Pressable onPress={() => navigation.navigate("Doces", {})}>
        <Image style={estilos.tinyLogo} source={require('../../assets/images/bombomCereja.jpg')}/> 
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Massas", {})}>
        <Image style={estilos.tinyLogo} source={require('../../assets/images/carbonara_light.jpg')}/> 
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
 
  imagem: {
    paddingTop: 50,
    width: 100,
    height: 100,
  },
  tinyLogo: {
    width: 125,
    height: 130,
    margin: 15,
    borderRadius: 6,
    borderStyle: "solid" ,
    justifyContent: "space-around"
  },
  logo: {
    width: 66,
    height: 58,
  },
});
