import React from 'react';
import { css } from '@emotion/react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Mainvisual from '../components/Mainvisual';
import About from '../components/About';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Mainvisual />
      <main css={wrapper}>
        <About />
        <div>Skills</div>
        <div>Contact</div>
      </main>
      <footer>Footer</footer>
    </Layout>
  );
};

const wrapper = css`
  max-width: 768px;
  margin: 0 auto;
`;

export default IndexPage;
