import {
   StyleSheet,
   Text,
   View,
   SafeAreaView,
   Button,
   TextInput,
   Alert,
 } from "react-native";
 
 import { Ionicons } from "@expo/vector-icons";
 import { useState } from "react";
 
 const Buscar = ({ navigation }) => {
   // captura em tempo real do que é digitado no textInput através do evento onChangeText
   const IngredienteBuscado = (valorDigitado) => {
     setIngrediente(valorDigitado);
   };
   /* Hook useState para monitorar/armazenar o filme que será buscado a partir do formulario */
   const [ingrediente, setIngrediente] = useState();
 
   /* função chamada toda vez que o botão for pressionado (usamos a prop onPress do button) */
   const buscarIngredientes = () => {
     /* se filme (gerenciado pelo useState) estiver vazio/undefined/false */
     if (!ingrediente) {
       return Alert.alert("Ops!", "Você deve digitar um ingrediente!");
     }
 
     /* usamos a prop navigation (que vem do react navigation programado no app) para acessar uma nova tela (no caso, resultados). para esta tela, passamos como objeto os dados digitados no formulario (neste caso, o filme) */
     navigation.navigate("Resultados", { ingrediente });
   };
 
   return (
     <SafeAreaView style={estilos.container}>
       <Text style={estilos.texto}>Scarface? Star wars? blade runner?</Text>
       <Text style={estilos.texto}>
         Localize um filme que você viu ou gostaria de ver!
       </Text>
 
       <View style={estilos.viewForm}>
         <Ionicons name="film" size={44} color="black" />
         <TextInput
           style={estilos.campo}
           placeholder="pesquise aqui o ingrediente"
           onChangeText={IngredienteBuscado}
         />
       </View>
 
       <View style={estilos.viewBotoes}>
         <Button
           style={estilos.botao}
           color="#5451a6"
           title="Pesquisar filme"
           onPress={buscarIngredientes}
         />
       </View>
     </SafeAreaView>
   );
 };
 
 export default Buscar;
 
 const corPrimaria = "#5451a6";
 
 const estilos = StyleSheet.create({
   container: {
     padding: 16,
     flex: 1,
   },
   texto: {
     paddingVertical: 8,
   },
   viewForm: {
     flexDirection: "row",
     justifyContent: "space-between",
     marginVertical: 16,
   },
   campo: {
     borderColor: "gray",
     borderWidth: 1,
     padding: 8,
     // width: "80%",
     flex: 0.9,
   },
 });
 