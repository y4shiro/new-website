import React from 'react';
import { css } from '@emotion/react';

import Layout from '../components/layout';
import Header from '../components/Header';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <main>
        <div>MainVisual</div>
        <div>About</div>
        <div>Skills</div>
        <div>Contact</div>
      </main>
      <footer>Footer</footer>
    </Layout>
  );
};

export default IndexPage;
