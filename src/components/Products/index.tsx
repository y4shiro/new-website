import React from 'react';
import { css } from '@emotion/react';
import { breakpoints } from 'src/styles/styles';

import ProductItem from './ProductItem';

const Products: React.FC = () => {
  return (
    <section css={sectionStyles}>
      <h2>Products</h2>

      <ul css={[ulStyles]}>
        <ProductItem
          name={'Sunset Time Notify'}
          description="Sunset Time Notify の説明"
        />
        <ProductItem name={'b'} description="bの説明" />
        <ProductItem name={'c'} description="cの説明" />
      </ul>
    </section>
  );
};

const sectionStyles = css`
  margin-bottom: 64px;
`;
const ulStyles = css`
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  @media (min-width: ${breakpoints.sm}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${breakpoints.lg}px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: ${breakpoints.xl}px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export default Products;
