import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-web';
import { Product } from '../Component/Product.js';
import { getProducts } from '../services/ProductsService.js';

export default function ProductsList ({navigation}) {
function renderProduct({item: product}) {
    return (
      <Product {...product} 
      onPress={() => {
        navigation.navigate('ProductDetails', {
          productId: product.id,
        });
      }}
      />
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());
  });

  return (     
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
  );
}
const styles = StyleSheet.create({
  productsList: {
    flexDirection:'row',  
    width:'100%',
    backgroundColor:"#05362A"
  },
  productsListContainer: {
    flex:1,
    backgroundColor:"#05362A",
    justifyContent:'center',
    alignContent:'center'
  },
  button:{
    borderRadius:'45px',
    width:'40%',
    backgroundColor:'#98140F',
    marginLeft:'30%',
  },
});