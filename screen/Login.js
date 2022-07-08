import React, { useState } from 'react';
import { StyleSheet, View , TextInput, ImageBackground, Dimensions} from 'react-native';
import { Button,Text} from 'react-native-elements';
import styles from '../style/estilo';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';



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

  const Lista = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "ProductsList"}]
    })
  }

  return (
    <ScrollView style={{flex:1, backgroundColor:'#000'}}
    showsVerticalScrollIndicator={false}>
      <ImageBackground
      source={require('../assets/cenoura.gif')}
      style={{
        height:Dimensions.get('window').height / 2.5,
      }}></ImageBackground>
      <View style={styles.bottoView}>
        <View style={{padding:40, backgroundColor:'#05362A', borderRadius:'24px'}}>
          <Text style={{color:'#FFFFFF', fontSize:34, textAlign:'center'}}>Login</Text>
        
      <View style={{backgroundColor:'#FFF', marginTop:140, borderRadius:'25px'}}>

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
        buttonStyle={specificStyle.button}
        onPress={() => entrar()}
      />
    



      <br/>
      <View style={[styles.textCad1, { flexDirection:'row', justifyContent:'center', alignItems:'center'}]}>
        <Text style={[styles.textCad, { color:'#101010'}]}>Não possui Conta?</Text>
     
        <Text style={[styles.text2, {  color:'#0135EF'}]} onPress={() => Cadastro()} onClick={()=> navi.navigate('Cadastro')}> Criar conta</Text>
      </View>
      </View>
      </View>
      </View>
    </ScrollView>
  );
}


const specificStyle = StyleSheet.create({
 
  bottoView:{
    flex:1.5,
    backgroundColor:'#FFF',
    bottom:50,
    borderTopStartRadius:60,
    borderTopEndRadius:60
  },
  button:{
    width: "50%",
    margintop:10,
    borderRadius: '25px',
    borderColor:'#D90429',
    backgroundColor:'#98140F',
    alignItems: 'center',
    justfyContent: 'center',
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