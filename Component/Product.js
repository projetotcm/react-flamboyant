import React from 'react';
import {Text, Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button} from 'react-native-elements';

export function Product({nome, preco, imagem, onPress}) {

  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.card} onPress={onPress}>
    <View style={{ flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>  
      <Image
        style={[styles.produtoImg, {flexDirection:'row', justifyContent:'space-around', alignItems:'center', margin:20}]}
        source={imagem}
      />
    </View>
    
      <View style={styles.infoContainer}>
        <Text style={[styles.nome, {color:'#101010', textAlign:'justify', fontSize:14}]}>{nome}</Text>
        <Text style={[styles.preco, {color:'#FF0000', textAlign:'auto'}]}>R$ {preco}</Text>
        
        
      </View>
    </TouchableOpacity>
    </View>
     
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,  
    width:'100%',
    backgroundColor:'#05362A' 
  },
  produtoImg:{
    flexDirection:'row',
    width: 265,
    height: 200,
    borderRadius: '24px',
    alignItems: 'center',
    justfyContent:'space-around',
  },
  infoContainer: {
    marginRight:70,
    marginTop:100
  },
  buttonComp:{
    width: '100px',
    margintop:10,
    borderRadius: '25px',
    backgroundColor:'#277028',
    alignItems: 'center',
    justfyContent:'space-around'
},

buttonDet:{
    width: "100px",
    margintop:10,
    borderRadius: '25px',
    backgroundColor:'#30A5BF',
    alignItems: 'center',
    justfyContent:'space-around'
},
card: {
  flexDirection:'row',
  backgroundColor: 'white',
  borderRadius: 16,
  shadowOpacity: 0.2,
  shadowRadius: 4,
  shadowColor: 'black',
  shadowOffset: {
    height: '5px',
    width: '5px',
  },
  elevation: 1,
  marginVertical: 20,
},
button:{
  borderRadius:'45px',
  width:'100px',
  backgroundColor:'#98140F',
  marginLeft:'30%',
 
},
});