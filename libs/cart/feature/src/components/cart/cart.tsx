import React from 'react';

import { View, Text } from 'react-native';

/* eslint-disable-next-line */
export interface CartProps {}

export function Cart(props: CartProps) {
  return (
    <View>
      <Text>Welcome to cart!</Text>
    </View>
  );
}

export default Cart;
