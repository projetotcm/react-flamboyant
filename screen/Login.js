 import React, { useState } from 'react';
import { StyleSheet, View , TouchableOpacity, TextInput} from 'react-native';
import { Button, Text} from 'react-native-elements';
import styles from '../style/estilo';
import {Ionicons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



export default function Login({navigation}) {
  const navi = useNavigation()

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [errorEmail, setErrorEmail]=useState(null)

  const validar = () => {
    let error = false
    setErrorEmail(null)
    if(email == null){
    setErrorEmail("Preencha seu e-mail corretamente")
    error = true
    }
    return !error
} 


  const entrar = () => {
    if(validar()){
      navigation.reset({
          index: 0,
          routes: [{name: "TelaMenu"}]
      })
    
  }
}

  const Cadastro = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "Cadastro"}]
    })
  }
  const Login = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "TelaMenu"}]
    })
  }

  const ListaProduto = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "ProductsList"}]
    })
  }


  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
     <View style={[styles.cardLogin, {backgroundColor:'white', borderRadius:'25px', width:'80%', height:'55%'}]}>
     <Text style={[styles.text , {color:'#101010', justifyContent:'center', textAlign:'center', padding:30}]} h3>Login</Text>
     
     <br/>
      <TextInput
        style={[styles.input, {backgroundColor:'#EBEBEB', width:'65%', height:'10%', padding:20 ,justifyContent:'center', alignItems:'center' ,border:'10%' ,borderRadius:'25px', marginLeft:'18%'}]}
        placeholder="E-mail"
        placeholderTextColor='#000'
        onChangeText={value => setEmail(value)}
        keyboardType="email-address"
      />
      <br/>
      <TextInput
        style={[styles.input, {backgroundColor:'#EBEBEB', width:'65%', height:'10%', padding:20 ,justifyContent:'center', alignItems:'center' ,border:'10%' ,borderRadius:'25px', marginLeft:'18%'}]}
        placeholder="Senha"
        placeholderTextColor='#000'
        onChangeText={value => setPassword(value)}
        secureTextEntry={setPassword}
        inputStyle={specificStyle.input}
      />

      <br/>
      <Button style={[styles.button, {justfyContent:'center', alignItems:'center'}]}
        title="Login"
        titleStyle={[styles.titulo]}
        buttonStyle={specificStyle.button}
        onPress={() => Login()}
      />

      <br/>
      <br/>
      <View style={[styles.textCad1, { flexDirection:'row', justifyContent:'center', alignItems:'center'}]}>
        <Text style={[styles.textCad, { color:'#101010'}]}>Não possui Conta?</Text>
     
        <Text style={[styles.text2, {  color:'#0135EF'}]} onPress={() => Cadastro()} onClick={()=> navi.navigate('Cadastro')}> Criar conta</Text>
      </View>
      </View>
      </View>
  );
}


const specificStyle = StyleSheet.create({
  specificContainer:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:"#2A672F",
    padding:10,
  },
  button:{
    width: "50%",
    margintop:10,
    borderRadius: '25px',
    backgroundColor:'#98140F',
    alignItems: 'center',
    justfyContent: 'center',
  },
  cardLogin: {
    width: '60%',
    height: '30%',
    display: 'flex',
    padding: '30px 35px',
    justfyContent: 'center',
    aligneItems: 'center',
    flexDirection: 'column',
},

input:{
  width:'60%',
  height:'50px',
  backgroundColor:'#EBEBEB',
  color:'#101010',
  padding:8,
  fontSize:18
},
icon:{
  width:'15%',
  height:50,
  justifyContent:'center',
  alignItems:'center'
},

});