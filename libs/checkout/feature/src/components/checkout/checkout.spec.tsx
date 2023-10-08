import React from 'react';
import { render } from '@testing-library/react-native';

import Checkout from './checkout';

describe('Checkout', () => {
  it('should render successfully', () => {
    const { root } = render(<Checkout />);
    expect(root).toBeTruthy();
  });
});
