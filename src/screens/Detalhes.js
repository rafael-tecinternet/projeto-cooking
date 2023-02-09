import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Detalhes = ({ route }) => {
  const { receita } = route.params;

  return (
    <View>
      <ScrollView>
        <Image
          source={{
            uri: `http://10.20.48.26/servidor-imagens/${receita.imagem}`,
          }}
          style={estilos.imagem}
        />
        <Text>{receita.titulo}</Text>
        <Text style={estilos.icones}>
          <Ionicons name="restaurant-outline" size={16} color="black" />{" "}
          {receita.rendimento}{" "}
          <MaterialCommunityIcons
            name="timer-settings-outline"
            size={16}
            color="black"
          />{" "}
          {receita.tempoDePreparo}
        </Text>
        <View>
          <Text>Ingredientes:</Text>

          <FlatList
            data={receita.ingredientes}
            renderItem={({ item }) => <Text>{item}.</Text>}
            keyExtractor={(item) => item.key}
          />
        </View>
        <View>
          <Text>Modo de Preparo:</Text>
          <FlatList
            data={receita.modoDePreparo}
            renderItem={({ item }) => <Text>{item}</Text>}
            keyExtractor={(item) => item.key}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Detalhes;

const estilos = StyleSheet.create({
  imagem: {
    height: 190,
  },
  ingredientes1: {
    fontSize: 16,
    lineHeight: 20,
    marginVertical: 16,
  },
});
