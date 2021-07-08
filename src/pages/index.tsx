import React from 'react';
import { css } from '@emotion/react';

import Layout from '../components/layout';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <main>
        <title>Home Page</title>
        <h1 css={h1}>Web Page</h1>
      </main>
    </Layout>
  );
};

const h1 = css`
  background-color: gray;
  color: #eee;
`;

export default IndexPage;
