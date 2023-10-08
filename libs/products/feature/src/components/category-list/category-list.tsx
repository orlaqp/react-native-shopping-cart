import React from 'react';

import {View, Text, ScrollView} from 'react-native';
import {observer} from "mobx-react";
import {useCategories} from "@cart/products/data-access";
import {Button, ButtonText} from "@gluestack-ui/themed";

/* eslint-disable-next-line */
export interface CategoryListProps {}

function CategoryList(props: CategoryListProps) {
  const categoryStore = useCategories();

  return (
    <ScrollView horizontal={true}>
      {categoryStore.items.map((category) => (
        <Button
          key={category}
          sx={{marginHorizontal: 5, marginVertical: 10}}
          size="md"
          variant="solid"
          action="primary"
          isDisabled={false}
          isFocusVisible={false}
          onPress={() => categoryStore.selectCategory(category)}
        >
          <ButtonText>{category}</ButtonText>
        </Button>


      ))}
    </ScrollView>
  );
}

export default observer(CategoryList);
