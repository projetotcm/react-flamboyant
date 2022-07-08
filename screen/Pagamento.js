import React, { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import { Button, Text} from 'react-native-elements';
import styles from '../style/estilo';


export default function Pagamento({navigation}) {

  const voltar = () => {
    navigation.reset({
        index: 0,
        routes: [{name: "TelaMenu"}]
    })
  }
    return (
    <View style={[styles.container, specificStyle.specificContainer]}>
       <Text style={[styles.text , {color:'#FFFFFF', justifyContent:'center', textAlign:'center', padding:30}]} h1>Compra Efetuada</Text>
       
       <Button style={[styles.button, {justfyContent:'center', alignItems:'center', width:'300px', height:'100px'}]}
          title="Voltar"
          titleStyle={[styles.titulo, {color:'#FFFFFF'}]}
          buttonStyle={specificStyle.button}
          onPress={() => voltar()}
        />
    </View>
    );
  }
  
  
  const specificStyle = StyleSheet.create({
    specificContainer:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:"#05362A",
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
  });