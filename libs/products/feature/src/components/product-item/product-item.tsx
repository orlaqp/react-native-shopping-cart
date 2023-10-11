import React from 'react';

import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Product, useProducts} from "@cart/products/data-access";
import {Box, Image} from "@gluestack-ui/themed";
import {useNavigation} from "@react-navigation/native";

/* eslint-disable-next-line */
export interface ProductItemProps {
  product: Product;
}

export function ProductItem({product}: ProductItemProps) {
  const productStore = useProducts();
  const navigation = useNavigation();
  const goToProductDetails = () => {
    productStore.selectProduct(product);
    navigation.navigate('ProductDetails');
  }

  return (
    <TouchableOpacity onPress={goToProductDetails}>
      <Box style={styles.container}>
        <Image alt={`image for ${product.title}`} source={{uri: product.images[0]}} style={{width: 80, height: 80}}/>
        <Text style={{textAlign: "center", paddingHorizontal: 5, marginTop: 10}}>{product.title}</Text>
        <Text style={{textAlign: "center", paddingHorizontal: 5, marginTop: 10}}>{product.price}</Text>
      </Box>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 120,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 10,
  },
  list: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  }
});

export default ProductItem;
