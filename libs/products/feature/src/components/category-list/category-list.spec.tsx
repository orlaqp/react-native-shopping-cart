import React from 'react';
import { render } from '@testing-library/react-native';

import CategoryList from './category-list';

describe('CategoryList', () => {
  it('should render successfully', () => {
    const { root } = render(<CategoryList />);
    expect(root).toBeTruthy();
  });
});
