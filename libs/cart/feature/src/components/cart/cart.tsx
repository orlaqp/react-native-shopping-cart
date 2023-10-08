import React from 'react';

import {View, Text, StyleSheet} from 'react-native';
import {useCart} from "@cart/cart/data-access";
import {Box} from "@gluestack-ui/themed";
import CartItem from "../cart-item/cart-item";
import {observer} from "mobx-react";

/* eslint-disable-next-line */
export interface CartProps {}

function Cart(props: CartProps) {
  const cartStore = useCart();

  if (cartStore.items.length === 0) {
    return (
      <Box>
        <Text>Cart is empty</Text>
      </Box>
    )
  }

  return (
    <Box style={styles.container}>
      {cartStore.items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <Box sx={{ marginTop: 50 }}>
        <Text>Cart value: {cartStore.totalValue}</Text>
      </Box>
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

export default observer(Cart);
