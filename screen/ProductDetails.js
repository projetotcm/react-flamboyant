import React, {useEffect, useState, useContext} from 'react';
import {Text, Image, View, ScrollView, SafeAreaView,  StyleSheet, Button} from 'react-native';
import { getProduct } from '../services/ProductsService.js';
import { CartContext } from '../Cart/CartContext';

export default function ProductDetails({route}) {
  const { productId } = route.params;
  const [product, setProduct] = useState({});

  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    setProduct(getProduct(productId));
  });

  function onAddToCart() {
    addItemToCart(product.id);
  }

  return (
    <SafeAreaView style={[styles.safeArea, {backgroundColor:'#05362A' }]}>
     
        <Image
          style={styles.image}
          source={product.imagem}
        />
        <View style={[styles.infoContainer, {backgroundColor:'#05362A'}]}>
          <Text style={[styles.nome, {color:'#FFF'}]}>{product.nome}</Text>
          <Text style={[styles.preco, {color:'#FF0000'}]}>R$ {product.preco}</Text>
          <Text style={[styles.descricao, {color:'#FFF'}]}>{product.descricao}</Text>
            <Button
            onPress={onAddToCart}
            title="Adicionar ao Carrinho"
            color={'#98140F'}
          
            />
        </View>
      
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor:'#05362A',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: '100%'
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft:8
  },
  preco: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    marginLeft:8
  },
  descricao: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 10,
    marginLeft:8,
    paddingBottom:'6.5em',
  },
});