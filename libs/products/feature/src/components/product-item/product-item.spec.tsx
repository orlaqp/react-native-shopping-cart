import React from 'react';
import { render } from '@testing-library/react-native';

import ProductItem from './product-item';

describe('ProductItem', () => {
  it('should render successfully', () => {
    const { root } = render(<ProductItem />);
    expect(root).toBeTruthy();
  });
});
