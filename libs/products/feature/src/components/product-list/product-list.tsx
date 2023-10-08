import React, {useEffect} from 'react';

import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {observer} from "mobx-react";
import {useCategories, useProducts} from "@cart/products/data-access";
import {Box} from "@gluestack-ui/themed";
import ProductItem from "../product-item/product-item";

/* eslint-disable-next-line */
export interface ProductListProps {
}

function ProductList(props: ProductListProps) {
  const categoryStore = useCategories();
  const productStore = useProducts();

  useEffect(() => {
    productStore.filterItems(categoryStore.selectedCategory);
  }, [categoryStore.selectedCategory, productStore]);

  return (
    <ScrollView>
      <Box style={styles.list}>
        {productStore.items.map((product) => (
          <ProductItem key={product.id} product={product}/>
        ))}
      </Box>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    padding: 10,
  }
});


export default observer(ProductList);
