import React from 'react';
import { render } from '@testing-library/react-native';

import ProductDetails from './product-details';

describe('ProductDetails', () => {
  it('should render successfully', () => {
    const { root } = render(<ProductDetails />);
    expect(root).toBeTruthy();
  });
});
