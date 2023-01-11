import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewBotoes}>
        <Text>Olaaaa</Text>
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
    justifyContent: "center",
  }
})