import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native'
import React from 'react'

/* A fazer na Página da Home:
Melhor estilização geral
fazer a barra de pesquisa funcionar
fazer com que os blocos de conteudo exibam informações do array do db.json como em ordem:
ID (não vai exibir porem vai identificar o ID)
Titulo
Ingredientes
Modo de preparo
Rendimento
Tempo de preparo
Categoria
E por fim, exibir a imagem
*/
const Home = () => {
  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewBotoes}>
        <TextInput 
        style={estilos.barraDePesquisa}
        placeholder="Pesquisar ingredientes"

        />
        </View>
        <Text style={estilos.viewBlocosDeConteudo}>Fricasse de frango</Text>

        <Text style={estilos.viewBlocosDeConteudo}>Bolo de cenoura com cobertura de chocolate</Text>

        <Text style={estilos.viewBlocosDeConteudo}>Molho mix para salada</Text>

        <Text style={estilos.viewBlocosDeConteudo}>Molho Rosé</Text>

        <Text style={estilos.viewBlocosDeConteudo}>Molho Barbecue</Text>
    </SafeAreaView>
  )
}

export default Home;

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  }, barraDePesquisa: {
    backgroundColor: "gray",
    borderRadius: 5,
    fontSize: 18,
    marginTop: 30,
    marginBottom: 40,
    paddingHorizontal: 65, // extende a barra de pesquisa para os lados (horizontal)
    paddingVertical: 5,
  }, viewBlocosDeConteudo: {
    // Aqui ele irá afetar os blocos de conteudo
    marginVertical: 15,
    backgroundColor: "gray",
    fontSize: 15,
    borderRadius: 5, // arredonda a borda
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center", 
    paddingTop: 15, // move o texto um pouco mais pra baixo
    paddingBottom: 80 // extende o card/bloco para baixo
  }
})