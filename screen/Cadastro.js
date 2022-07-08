import React,{ useState} from 'react';
import {StyleSheet, View , TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, CheckBox, Input, Text } from 'react-native-elements';
import styles from '../style/estilo';
import {Ionicons} from '@expo/vector-icons';
import { block } from 'react-native-reanimated';
import Login from './Login';
import { useNavigation } from '@react-navigation/native';



export default function Cadastro({navigation}) {
    const navi = useNavigation()

    const [email, setEmail]= useState(null)
    const [nome, setNome]=useState(null)
    const [senha, setSenha]=useState(null)
    const [Confsenha, setConfSenha]=useState(null)
    const [errorEmail, setErrorEmail]=useState(null)
    const [errorNome, setErrorNome]=useState(null)
    const [hidePass, setHidePass]=useState(true)

      /*Validando as informações do Cadastro*/ 
    const validar = () => {
        let error = false
        setErrorEmail(null)
        if(email == null){
        setErrorEmail("Preencha seu e-mail corretamente")
        error = true
        }
        return !error
    } 

    const Login = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Login"}]
        })
      }
    
    const salvar = () => {
        if(validar()){
            console.log("Salvo");
            navigation.reset({
                index: 0,
                routes: [{name: "Login"}]
            })
        }
    }
    return (
        <View style={[styles.container, specificStyle.specificContainer]}>
        <View style={[styles.cardLogin, {backgroundColor:'white', borderRadius:'25px', width:'80%', height:'60%'}]}>
         <Text style={[styles.text ,{color:'#101010', justifyContent:'center', textAlign:'center', padding:20}]} h3>Cadastro</Text>
         <br />
         <TextInput
          placeholder="Nome"
          placeholderTextColor='#000'
          style={[styles.input, {backgroundColor:'#EBEBEB', width:'65%', height:'10%', padding:20 ,justifyContent:'center', alignItems:'center' ,border:'10%' ,borderRadius:'25px', marginLeft:'18%'}]}
          onChangeText={value => setNome(value)}
          keyboardType="Text"
          inputStyle={specificStyle.input}
          />
        <br />
        <TextInput
          placeholder="E-mail"
          placeholderTextColor='#000'
          style={[styles.input, {backgroundColor:'#EBEBEB', width:'65%', height:'10%', padding:20 ,justifyContent:'center', alignItems:'center' ,border:'10%' ,borderRadius:'25px', marginLeft:'18%'}]}
          onChangeText={value => {
              setEmail(value) 
              setErrorEmail(null)}}
          keyboardType="email-address"
          inputStyle={specificStyle.input}
          errorMessage={errorEmail}
        />
        <br />  
        <TextInput
          placeholder="Senha"
          placeholderTextColor='#000'
          style={[styles.input, {backgroundColor:'#EBEBEB', width:'65%', height:'10%', padding:20 ,justifyContent:'center', alignItems:'center' ,border:'10%' ,borderRadius:'25px', marginLeft:'18%'}]}
          onChangeText={value => setSenha(value)} 
          secureTextEntry={setSenha}
          inputStyle={specificStyle.input}
          />
        <br />
        <TextInput
          placeholder="Confirmar Senha"
          placeholderTextColor='#000'
          style={[styles.input, {backgroundColor:'#EBEBEB', width:'65%', height:'10%', padding:20 ,justifyContent:'center', alignItems:'center' ,border:'10%' ,borderRadius:'25px', marginLeft:'18%'}]}
          onChangeText={value => setConfSenha(value)} 
          secureTextEntry={setConfSenha}
          inputStyle={specificStyle.input}
          />
        <br />
        <Button style={[styles.button, {justfyContent:'center', alignItems:'center'}]}
            title="Salvar"
            titleStyle={styles.titulo}
            buttonStyle={specificStyle.button}
            onPress={() => salvar()}
        />
           

        <br/>
        <View style={[styles.textCad1, { flexDirection:'row', justifyContent:'center', alignItems:'center'}]}>
            <Text style={[styles.textCad, { color:'#101010'}]}>Já possui Conta?</Text>
            
            <Text style={[styles.text2, {  color:'#0135EF'}]} onPress={() => Login()} onClick={()=> navi.navigate('Login')}> Faça o Login</Text>
        </View>
    </View>
</View>
       

    );
}

const specificStyle = StyleSheet.create({
    specificContainer:{
        backgroundColor:"#05362A",
        padding:10
    },
    button:{
        width: "50%",
        margintop:10,
        borderRadius: '25px',
        backgroundColor:'#98140F',
        alignItems: 'center',
        justfyContent: 'center',
    },
    input:{
        color:'white',
        borderRadius:'25px',
        padding: 10
    }
})
