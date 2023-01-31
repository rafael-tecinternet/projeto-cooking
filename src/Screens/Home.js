import { StyleSheet, Text, View, SafeAreaView, TextInput, ImageBackground, Pressable } from 'react-native'
import React from 'react'

import { Ionicons } from "@expo/vector-icons";

import ImagemAlternativa from "../../assets/images/fricasseDeFrango.jpg"
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
      <View style={estilos.viewForm}>
      {/* faz com que o icone de hamburguer (reorder) fique dentro do formulario (não funcionando ainda) */}
      <Pressable>
        <Ionicons name="reorder-three" size={30} color="black" />
        </Pressable>
        <TextInput 
        style={estilos.barraDePesquisa}
        placeholder="Pesquisar ingredientes"/>
        
        <View>
        
        {/* a fazer: adicionar onpress no pressable e a programação para ir para os detalhes da receita */}
        <Pressable>
        <ImageBackground style={estilos.BlocosDeConteudo}
        source={ImagemAlternativa}>
        <Text style={estilos.texto}>Fricasse de frango</Text>
        </ImageBackground>
        </Pressable>


        <ImageBackground style={estilos.BlocosDeConteudo}
        source={ImagemAlternativa}>
        <Text style={estilos.texto}>Fricasse de frango</Text>
        </ImageBackground>
        
        </View>
      </View>
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
  }, BlocosDeConteudo: {
    // Aqui ele irá afetar os blocos de conteudo
    marginVertical: 15,
    backgroundColor: "gray",
    borderRadius: 5, // arredonda a borda
    width: "100%", // extende em 100% o bloco de conteudo
    height: 150,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 15, // move o texto um pouco mais pra baixo
    paddingBottom: 80, 
    borderWidth: 3, // aumenta a grossura da borda
    overflow: "hidden", // faz com que a imagem não passe da borda
  }, texto: {
    color: "red",
    textAlign: 'center',
    fontSize: 18
  }
})