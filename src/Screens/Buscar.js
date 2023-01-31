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
        <Ionicons name="search" size={22} color="black" />
        <TextInput
          placeholder="Busque por uma receita"
          style={estilos.campo}
          onChangeText={receitaDigitada}
        />
        <Button title="Buscar" color={"orange"} onPress={buscarReceita} />
      </View>
    </SafeAreaView>
  );
};

export default Buscar;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    alignItems: "center",
    justifyContent: "top",
  },
  viewForm: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  campo: {
    borderWidth: 1,
    padding: 10,
    flex: 0.9,
  },
  botao: {
    padding: 10,
    alignItems: "center",
  },
});
