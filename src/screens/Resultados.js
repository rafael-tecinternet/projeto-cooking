import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import serverApi from "../services/api";
import Loading from "../components/Loading";
import axios from "axios";
import CardReceita from "../components/CardReceita";

const Resultados = ({ route }) => {
  const {receita } = route.params;
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function buscarReceita() {
      try {
        const resposta = await axios.get(`${serverApi}/receitas.json`);
        setResultados(resposta.data);
        console.log(resultados);
        setLoading(false);
      } catch (error) {
        console.log("Deu Ruim na busca da API: " + error.message);
      }
    }
    buscarReceita();
  }, [receita]);


  return (
    <SafeAreaView style={estilos.container}>
      <Text>Você buscou por: {receita}.</Text>

      {loading && <Loading />}
      <View style={estilos.viewFilmes}>
        {!loading && (
          <FlatList
            data={resultados}
            renderItem={({ item }) => {
              return <CardReceita receitas={item} />;
            }}
            keyExtractor={(item) => item.id}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Resultados;

const estilos = StyleSheet.create({
  viewFilmes: {
    marginVertical: 8,
  },
  container: {
    flex: 1,
    padding: 16,
  },
});
