import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Home from "./Home";
import Buscar from "./Buscar";
import Categorias from "./Categorias";
import Favoritos from "./Favoritos";

const HomeTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "gold",
        tabBarInactiveTintColor: "#f7f7f7",
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#bb0b0b",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="home" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={Buscar}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="search" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Categorias"
        component={Categorias}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            return <Ionicons name="book" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size, focused }) => {
            return <Ionicons name="star" size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeTabs;

const styles = StyleSheet.create({});
