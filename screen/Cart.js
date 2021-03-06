import React, { useEffect, useState, useContext } from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import { color } from 'react-native-reanimated';
import { CartContext } from '../Cart/CartContext';
import { getItemsCount } from '../screen/Cart';
import { Button } from 'react-native-elements';


export default function Cart ({navigation}) {
const {items, getItemsCount, getTotalPreco} = useContext(CartContext);

const comprar = () => {
  navigation.reset({
      index: 0,
      routes: [{name: "Pagamento"}]
  })
}


  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPreco());
    });
    return (
      <SafeAreaView>
       <View style={styles.cartLineTotal}>
          <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
          <Text style={styles.lineRight}>R$ {total}</Text>
       </View>
       <br/>
          <Button style={[styles.button, {justfyContent:'center', alignItems:'center',marginLeft:'25%'}]}
          title="Comprar"
          titleStyle={[styles.titulo, {color:'#FFFFFF'}]}
          buttonStyle={styles.button}
          onPress={() => comprar()}
        />
       </SafeAreaView>
      
    );
  }
function renderItem({item}) {
    return (
       <View style={styles.cartLine}>
          <Text style={styles.lineLeft}>{item.product.nome} x {item.qtd}</Text>
          <Text style={styles.lineRight}>R$ {item.totalPreco}</Text>
       </View>
    );
  }

  return (
    <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.id.toString()}
      ListFooterComponent={Totals}
    />
  );
}
const styles = StyleSheet.create({
  cartLine: { 
    flexDirection: 'row',
  },
  cartLineTotal: { 
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1
  },
  lineTotal: {
    fontWeight: 'bold',    
  },
  lineLeft: {
    fontSize: 20, 
    lineHeight: 40, 
    color:'#333333' 
  },
  lineRight: { 
    flex: 1,
    fontSize: 20, 
    fontWeight: 'bold',
    lineHeight: 40, 
    color:'#333333', 
    textAlign:'right',
  },
  itemsList: {
    backgroundColor: '#eeeeee',
  },
  itemsListContainer: {
    backgroundColor: '#eeeeee',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  button:{
    width: "50%",
    margintop:10,
    borderRadius: '25px',
    backgroundColor:'#98140F',
    alignItems: 'center',
    justfyContent: 'center',
  }
});