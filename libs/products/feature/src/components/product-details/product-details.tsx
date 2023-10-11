import React, {useEffect} from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {useProducts} from "@cart/products/data-access";
import {Box, Button, ButtonText, Image} from "@gluestack-ui/themed";
import {useCart} from "@cart/cart/data-access";
import {useNavigation} from "@react-navigation/native";

/* eslint-disable-next-line */
export interface ProductDetailsProps {
}

export function ProductDetails(props: ProductDetailsProps) {
  const productStore = useProducts();
  const cartStore = useCart();
  const navigation = useNavigation();

  if (!productStore.selectedProduct) {
    // TODO: instead of null return a nicer component or redirect to different page
    return null;
  }

  const addToCart = () => {
    cartStore.addItem(productStore.selectedProduct!);
    // TODO: taking theuser to caft just for testing in a real app this would not be a good user case
    navigation.navigate('Cart');
  }

  return (
    <Box style={styles.container}>
      <Image
        alt={`image for ${productStore.selectedProduct?.title}`}
        source={{uri: productStore.selectedProduct.images[0]}} style={{width: 200}}
      />
      <Text>
        {productStore.selectedProduct.title}
      </Text>
      <Text>
        {productStore.selectedProduct.description}
      </Text>
      <Text>
        {productStore.selectedProduct.price}
      </Text>
      <Button style={{flexGrow: 0, marginTop: 30}}>
        <ButtonText onPress={addToCart}>Add to cart</ButtonText>
      </Button>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
  }
});

export default ProductDetails;
