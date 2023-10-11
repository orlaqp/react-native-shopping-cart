import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {Product} from "@cart/products/data-access";
import {Box, Button, ButtonText} from "@gluestack-ui/themed";
import {useCart} from "@cart/cart/data-access";
import {observer} from "mobx-react";

/* eslint-disable-next-line */
export interface CartItemProps {
  item: Product;
}

function CartItem({ item }: CartItemProps) {
  const cartStore = useCart();
  const removeFromCart = () => {
    cartStore.removeItem(item)
  }

  return (
    <Box style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{item.price}</Text>
      <Button style={{flexGrow: 0, marginTop: 30}} action="negative" size="xs">
        <ButtonText onPress={removeFromCart}>Remove</ButtonText>
      </Button>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: "flex-start",
    alignItems: "center"
  },
  title: {
    fontWeight: "bold"
  },
  price: {
    marginLeft: 30
  }
});

export default observer(CartItem);
