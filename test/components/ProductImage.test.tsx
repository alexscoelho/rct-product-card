import React from 'react';
import renderer from 'react-test-renderer';

import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('show component with image from context', () => {
    const wrapper = renderer.create(
      <ProductCard product={product2}>{() => <ProductImage />}</ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
  test('show component with image from props', () => {
    const wrapper = renderer.create(
      <ProductImage img="https://placekitten.com/640/360" />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
