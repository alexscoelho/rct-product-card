import React from 'react';
import renderer from 'react-test-renderer';

import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductCard', () => {
  test('show component with personalized title', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => <h1>Product card</h1>}
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
