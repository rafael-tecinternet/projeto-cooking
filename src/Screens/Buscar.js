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
        <TextInput
          placeholder="Busque por uma receita"
          style={estilos.campo}
          onChangeText={receitaDigitada}
        />
        <Ionicons name="search1" size={24} color="black" />
        <Button
          style={estilos.botao}
          title="Procurar"
          onPress={buscarReceita}
        />
      </View>
    </SafeAreaView>
  );
};

export default Buscar;

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  viewForm: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  campo: {
    borderWidth: 1,
    padding: 10,
    flex: 0.9,
  },
  botao: {
    backgroundColor: "orange",
    borderWidth: 2,
  },
});
