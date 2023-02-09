import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Home from "./src/screens/Home";
import Buscar from "./src/screens/Buscar";
import Categorias from "./src/screens/Categorias";
import Favoritos from "./src/screens/Favoritos";

// Para a navegação funcionar precisamos importar todas as funções que foram criadas no arquivo StackNavigation
import {
  NavegacaoHome,
  NavegacaoBusca,
  NavegacaoFavoritos,
  NavegacaoCategorias,
} from "./StackNavigation";

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Tab.Navigator
          backBehavior="history"
          screenOptions={{
            tabBarActiveTintColor: "orange",
            tabBarInactiveTintColor: "white",
            tabBarStyle: {
              position: "absolute",
              backgroundColor: "#666666",
            },
          }}
        >
          {/* Abaixo todas as Screens serão passadas como parâmetro para o "componet" e serão carregadas como as Funções que já atribuimos  */}
          <Tab.Screen
            name="Home"
            component={NavegacaoHome}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size }) => {
                return <Ionicons name="home" size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="Buscar"
            component={NavegacaoBusca}
            options={{
              tabBarIcon: ({ color, size }) => {
                return <Ionicons name="search" size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="Categorias"
            component={NavegacaoCategorias}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, size, focused }) => {
                return <Ionicons name="book" size={size} color={color} />;
              },
            }}
          />
          <Tab.Screen
            name="Favoritos"
            component={NavegacaoFavoritos}
            options={{
              tabBarIcon: ({ color, size, focused }) => {
                return <Ionicons name="star" size={size} color={color} />;
              },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;

const estilos = StyleSheet.create({});
