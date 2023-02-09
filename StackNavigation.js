// ESSE ARQUIVO FOI CRIADO PARA REALIZARMOS AS NAVEGAÇÕES INTERNAS DO APP, SEM A ULTILIZAÇÃO DO MENU, AQUI DECLARAMOS FUNÇÕES E EXPORTAMOS PARA QUE AS PRÓXIMAS NAVEGAÇÕES SEJAM FEITAS ATRAVÉS DE FUNÇÕES
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import Home from "./src/screens/Home";
import Categorias from "./src/screens/Categorias";
import Favoritos from "./src/screens/Favoritos";
import Buscar from "./src/screens/Buscar";
// Realizamos a importação da TelaCategoria para exibição/navegação entre os componentes filhos da mesma
import TelaCategoria from "./src/screens/TelaCategoria";

// Aqui criamos uma função e exportamos para acessa-la em outra página na qual chamaremos nos próximos passos
// Ultilizamos o Stack Navigator/Stack Screen para a exibição dos resultados que serão entregues quando navegarmos
export function NavegacaoHome() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeStack" component={Home} />
    </Stack.Navigator>
  );
}
export function NavegacaoBusca() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        // Aqui inibimos a presença de um segundo menu superior, para não haver ambiguidade para o usuario, para reverter isso basta atribuir o valor do headerShown: como true.
        options={{ headerShown: false }}
        name="BuscarStack"
        component={Buscar}
      />
    </Stack.Navigator>
  );
}
// Navegação categorias que fará o acesso à navegação interna "sem ser no menu abaixo"
export function NavegacaoCategorias() {
  return (
    <Stack.Navigator>
      {/* Todos os names serão como "nomeStack" para não gerar conflitos com a navegação de menu */}
      <Stack.Screen name="CategoriasStack" component={Categorias} />
      <Stack.Screen
        name="TelaCategoriaStack"
        component={TelaCategoria}
        options={{ title: "Tela Categoria" }}
      />
    </Stack.Navigator>
  );
}
export function NavegacaoFavoritos() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="FavoritosStack"
        component={Favoritos}
        options={{ title: "Favoritos" }}
      />
    </Stack.Navigator>
  );
}
