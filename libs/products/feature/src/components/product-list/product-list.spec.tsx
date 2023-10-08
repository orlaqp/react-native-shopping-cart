import React from 'react';
import { render } from '@testing-library/react-native';

import ProductList from './product-list';

describe('ProductList', () => {
  it('should render successfully', () => {
    const { root } = render(<ProductList />);
    expect(root).toBeTruthy();
  });
});
