import React from 'react';
import { render } from '@testing-library/react-native';

import CartItem from './cart-item';

describe('CartItem', () => {
  it('should render successfully', () => {
    const { root } = render(<CartItem />);
    expect(root).toBeTruthy();
  });
});
