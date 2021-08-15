import React from 'react';
import { css } from '@emotion/react';

import Layout from '../components/layout';
import Header from '../components/Header';
import Mainvisual from '../components/Mainvisual';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <main>
        <Mainvisual />
        <div>About</div>
        <div>Skills</div>
        <div>Contact</div>
      </main>
      <footer>Footer</footer>
    </Layout>
  );
};

export default IndexPage;
