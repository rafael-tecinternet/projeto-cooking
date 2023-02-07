import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, StatusBar } from "react-native";
import HomeTabs from "./src/screens/HomeTabs";
import Detalhes from "./src/screens/Detalhes";
import Resultados from "./src/screens/Resultados";
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;

const estilos = StyleSheet.create({});
