import { useFonts } from "expo-font";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
} from "react-native";
import { useEffect, useState } from "react";
import serverApi from "../services/api";



const Home = () => {
  /* Importação das fontes que serão Ultilizadas no projeto, (caso formos ultilizar outros pesos de fontes esses deverão ser carregados como no código abaixo, todas as fonts estão na pasta assets/fonts lá estão todos os pesos que poderemos ultilizar no projeto ) */
  const [fonteCarregada] = useFonts({
    manrope: require("../../assets/fonts/Manrope-Regular.ttf"),
    merienda: require("../../assets/fonts/Merienda-Bold.ttf"),
  });

  const [receitas, setReceitas] = useState([]);

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
        console.log(receitas);
        console.log(listaDeReceitas);
      } catch (error) {
        console.log("Deu ruim! " + error.message);
      }
    }
    getReceitas();
  }, []);
  /* Aqui temos a condicional de fonte carregada, a mesma só pode ser chamada após os Hooks que foram ultilizados(useState e useEffect) caso contrário ela trará bugs */
  if (!fonteCarregada) return <Text>Fonte sendo carregada</Text>;

  return (
    <SafeAreaView style={estilos.container}>
      <ScrollView>
        {receitas.map(({ titulo, id, imagem }) => (
          <View style={estilos.corpo} key={id}>
            <Text style={estilos.titulo1}>{titulo}</Text>
            <View></View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const estilos = StyleSheet.create({
  ingredientes: { flexWrap: "wrap", flexDirection: "column" },
  container: {
    flex: 1,
    padding: 8,
    margin: 30,
    width: 370,
    textAlign: "center",
  },
  titulo1: {
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
    fontFamily: "merienda",
    fontSize: 16,
    padding: 8,
  },
});
