import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home";
import Buscar from "./Buscar";
import Categorias from "./Categorias";
import Favoritos from "./Favoritos";
import { Ionicons } from "@expo/vector-icons";

const HomeTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={{
        tabBarActiveTintColor: "#800000",
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
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="search" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Categorias"
        component={Categorias}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            return <Ionicons name="book" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Favoritos"
        component={Favoritos}
        options={{
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
