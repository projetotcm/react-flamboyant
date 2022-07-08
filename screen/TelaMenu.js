import React, { useRef } from 'react';
import { StyleSheet, View, Animated} from 'react-native';
import { Button, Text} from 'react-native-elements';
import styles from '../style/estilo';
import {OleoScript_400Regular, useFonts} from '@expo-google-fonts/oleo-script';
import {Roboto_400Regular} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';

export default function Login({navigation}) {



  let [fontsLoaded] = useFonts({
    OleoScript_400Regular,
    Roboto_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const Produtos = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "ProductsList"}]
    })
  }

  const Cadastro = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Cadastro"}]
    })
  }
 
  return (
   
   <View style={specificStyle.container}>
    <View style={specificStyle.header}>
    <Text style={{color:'#FFF', fontFamily:'OleoScript_400Regular', fontSize:'2rem'}}>Restaurante Flamboyant</Text>
    </View>
    <View style={specificStyle.content}>
      <Text style={[{fontSize:30},specificStyle.title]}>O nosso restaurante vegano! 💚</Text>
      <br />
      <br />
      <br />
      
      <Text style={specificStyle.texts}>Wellington Cidade, empreendedor e
responsável pelo Restaurante Vegano Flamboyant, visitou as Ilhas de Madagascar
e se encantou com a vegetação,
principalmente com uma árvore chamada <Text style={{fontWeight:'bold'}}> Flamboyant</Text>.
</Text>
<br />
      <Text style={[specificStyle.texts, {paddingBottom:'11em'}]}>
Com o intuito de promover uma alimentação
vegana, responsável, saudável, e acessível,
criou o Restaurante Vegano Flamboyant.</Text>

<Text style={specificStyle.title}>Aproveite nossas delícias veganas e sem crueldade. 💛</Text>
      <br/>
      <Button
     buttonStyle={specificStyle.button}
     title={"ENTRE NA LOJA!"}
     onPress={() => Produtos()}
     />
    </View>
   </View>

  
  );
}


const specificStyle = StyleSheet.create({

button:{
  borderRadius:'45px',
  width:'40%',
  backgroundColor:'#98140F',
  marginLeft:'30%',
},
container:{
  alignItems:'center',
  backgroundColor:'#FFF'
},
header:{
  backgroundColor: '#2A672F',
  width:'100%',
  flex:1,
  textAlign:'center',

  padding:'2em'
},
title:{
  fontWeight:'bold',
  textAlign:'center',
},
content: {
backgroundColor:'#FFF',
width:'100%',
borderRadius:'19px',

},
texts: {
  marginLeft:'20px',
  fontFamily:'Roboto_400Regular'
}
});