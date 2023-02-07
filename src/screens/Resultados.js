import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import api from "../services/api";
import Loading from "../components/Loading.js";

const Resultados = ({ route }) => {
  const { receita } = route.params;
  const [resultados, setResultados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function buscarReceita() {
      try {
        const resposta = await api.get(`/receitas?${titulo}`);
        setResultados(resposta);
        setInterval(() => {
          setLoading(false);
        }, 3000);
      } catch (error) {
        console.log("Deu Ruim na busca da API: " + error.message);
      }
    }
    buscarReceita();
  }, []);

  return (
    <SafeAreaView style={estilos.container}>
      <Text>Você buscou por: {receita}.</Text>

      {loading && <Loading />}
      <View style={estilos.viewFilmes}>
        {!loading && (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={resultados}
            renderItem={({ item }) => {
              return (receita = { item });
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
