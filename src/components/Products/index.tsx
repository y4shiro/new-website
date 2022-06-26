import React from 'react';
import { css } from '@emotion/react';

const Products: React.FC = () => {
  return (
    <section css={sectionStyles}>
      <h2>Products</h2>
      <div>ここにコンテンツを追加</div>
    </section>
  );
};

const sectionStyles = css`
  margin-bottom: 64px;
`;

const ulStyle = css`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 32px;
`;

export default Products;
