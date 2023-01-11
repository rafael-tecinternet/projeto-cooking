import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Home from "./src/screens/Home";
import Buscar from "./src/screens/Buscar";
import Categorias from "./src/screens/Categorias";
import Favoritos from "./src/screens/Favoritos";

const App = () => {
  const Tab = createBottomTabNavigator();
  return (
    <>
      <StatusBar />
      <NavigationContainer>
      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor:'orange',
        tabBarInactiveTintColor:'white',
        tabBarStyle:{
        position:"absolute",
        backgroundColor: "#666666"
      }}}>
        <Tab.Screen name="Home" component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => {
            return(
            <Ionicons name="home" size={size} color={color}/>)
          }
        }}/>
        <Tab.Screen name="Buscar" component={Buscar} 
        options={{
          tabBarIcon: ({color, size}) => {
            return(
            <Ionicons name="search" size={size} color={color}/>)
          }
        }}
         />
        <Tab.Screen name="Categorias" component={Categorias} 
        options={{
          tabBarIcon: ({color, size, focused}) => {
    
            return(
              <Ionicons name="book" size={size} color={color}/>)
            
          }
        }}/>
        <Tab.Screen name="Favoritos" component={Favoritos} 
        options={{
          tabBarIcon: ({color, size, focused}) => {
    
            return(
              <Ionicons name="star" size={size} color={color}/>)
            
          }
        }}/>
      </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};
export default App;

const estilos = StyleSheet.create({});
