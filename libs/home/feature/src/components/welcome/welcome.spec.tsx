import React from 'react';
import { render } from '@testing-library/react-native';

import Welcome from './welcome';

describe('Welcome', () => {
  it('should render successfully', () => {
    const { root } = render(<Welcome />);
    expect(root).toBeTruthy();
  });
});
