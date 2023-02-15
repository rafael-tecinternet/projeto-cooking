import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, StatusBar } from "react-native";
import HomeTabs from "./src/screens/HomeTabs";
import Detalhes from "./src/screens/Detalhes";
import Resultados from "./src/screens/Resultados";
import Carnes from "./src/screens/Carnes";
import Doces from "./src/screens/Doces";
import Massas from "./src/screens/Massas";
import Molhos from "./src/screens/Molhos";
import Salgados from "./src/screens/Salgados";
import Vegano from "./src/screens/Vegano";
const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home1"
            component={HomeTabs}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Detalhes" component={Detalhes} />
          <Stack.Screen name="Resultados" component={Resultados} />
          <Stack.Screen name="Carnes" component={Carnes} />
          <Stack.Screen name="Doces" component={Doces} />
          <Stack.Screen name="Massas" component={Massas} />
          <Stack.Screen name="Molhos" component={Molhos} />
          <Stack.Screen name="Salgados" component={Salgados} />
          <Stack.Screen name="Vegano" component={Vegano} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;

const estilos = StyleSheet.create({});
