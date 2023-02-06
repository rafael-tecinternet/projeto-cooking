import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import HomeTabs from "./src/screens/HomeTabs";
import Detalhes from "./src/screens/Detalhes";

const App = () => {
  /* const Tab = createBottomTabNavigator(); */
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
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;

const estilos = StyleSheet.create({});
