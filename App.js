import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsList  from './screen/ProductsList.js';
import ProductDetails  from './screen/ProductDetails.js';
import Cart  from './screen/Cart.js';
import CartIcon  from './Component/CartIcon';
import CartProvider  from './Cart/CartContext';
import Login from './screen/Login';
import Cadastro from './screen/Cadastro';
import TelaMenu from './screen/TelaMenu';
import Pagamento from './screen/Pagamento';
import {OleoScript_400Regular, useFonts} from  '@expo-google-fonts/oleo-script';
import {Roboto_400Regular} from  '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

const Stack = createStackNavigator();
function MyStack() {
  return (
    <CartProvider>
        <Stack.Navigator>
        <Stack.Screen options={{ headerTransparent: true, headerShown:false}} name="Login" component={Login} />
        <Stack.Screen options={{ headerTransparent: true, headerShown:false}} name="Cadastro" component={Cadastro}/>
        <Stack.Screen options={{ headerTransparent: true, headerShown:false}} name="TelaMenu" component={TelaMenu}/>
        <Stack.Screen options={{ headerTransparent: true, headerShown:false}} name="Pagamento" component={Pagamento}/>
        
        <Stack.Screen name='ProductsList' component={ProductsList} 
          options={({ navigation }) => ({
            title: 'Produtos',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Detalhes Produto',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'Carrinho',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
        </Stack.Navigator>
    </CartProvider>
  );
}
const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 20
  }
});
export default function App() {
  let [fontsLoaded] = useFonts({
    OleoScript_400Regular,
    Roboto_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}