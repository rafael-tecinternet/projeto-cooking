import { Alert, Button, StyleSheet, Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
const Buscar = () => {
  const navigation = useNavigation();
  const [receita, setReceita] = useState('');

  const receitaDigitada = (valorDigitado) => {
    setReceita(valorDigitado);
  };

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
    flex: 1,
  },
  viewForm: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ddd",
    width: "100%",
    position: "absolute",
    padding: 8,
    paddingLeft: 16,
  },
  searchInput: {
    fontSize: 14,
    width: "65%",
    marginHorizontal: 16,
  },
  botao: {
    padding: 10,
    alignItems: "center",
  },
});
