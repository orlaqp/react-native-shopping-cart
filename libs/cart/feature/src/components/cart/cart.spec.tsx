import React from 'react';
import { render } from '@testing-library/react-native';

import Cart from './cart';

describe('Cart', () => {
  it('should render successfully', () => {
    const { root } = render(<Cart />);
    expect(root).toBeTruthy();
  });
});
