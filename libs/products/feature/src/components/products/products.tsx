import React from 'react';

import {View, Text} from 'react-native';
import {Box, VStack} from "@gluestack-ui/themed";
import CategoryList from "../category-list/category-list";
import ProductList from "../product-list/product-list";

/* eslint-disable-next-line */
export interface ProductsProps {
}

export function Products(props: ProductsProps) {
  return (
    <Box sx={{ flex: 1, flexDirection: 'column' }}>
      <Box sx={{ flexGrow: 0 }}>
        <CategoryList/>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <ProductList/>
      </Box>
    </Box>
  )
    ;
}

export default Products;
