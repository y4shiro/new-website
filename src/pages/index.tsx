import React from 'react';
import { css } from '@emotion/react';

const IndexPage: React.FC = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1 css={h1}>Web Page</h1>
    </main>
  );
};

const h1 = css`
  background-color: gray;
`;

export default IndexPage;
