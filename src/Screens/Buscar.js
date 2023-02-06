import { Alert, Button, StyleSheet, Text, View, TextInput } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

const Buscar = ({ navigation }) => {
  const receitaDigitada = (valorDigitado) => {
    setReceita(valorDigitado);
  };

  const [receita, setReceita] = useState("");

  const buscarReceita = () => {
    if (!receita) {
      return Alert.alert("Ops!", "Você deve digitar uma receita!");
    }

    navigation.navigate("Resultados", { receita });
  };

  return (
    <SafeAreaView style={estilos.container}>
      <View style={estilos.viewForm}>
        <Ionicons name="search" size={20} color="#000" />
        <TextInput
          placeholder="Busque por uma receita"
          style={estilos.searchInput}
          onChangeText={receitaDigitada}
        ></TextInput>
        <Button title="Buscar" color={"#bb0b0b"} onPress={buscarReceita} />
      </View>
    </SafeAreaView>
  );
};

export default Buscar;

const estilos = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "space-between",
  },
  viewForm: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ddd",
    borderRadius: 0,
    paddingHorizontal: 10,
    marginVertical: 0,
    position: "absolute",
    top: -40,
    padding: 5,
    position: "relative",
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    paddingVertical: 0,
    padding: 10,
    flex: 1,
  },
  botao: {
    padding: 10,
    alignItems: "center",
  },
});
