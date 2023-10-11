import React from 'react';
import { render } from '@testing-library/react-native';

import CategoryItem from './category-item';

describe('CategoryItem', () => {
  it('should render successfully', () => {
    const { root } = render(<CategoryItem />);
    expect(root).toBeTruthy();
  });
});
