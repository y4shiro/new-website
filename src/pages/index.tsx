import React from 'react';
import { css } from '@emotion/react';
import { breakpoints } from '../styles/styles';

import Layout from '../components/Layout';
import Header from '../components/Header/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <Header />
      <Hero />

      <main css={wrapper}>
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </Layout>
  );
};

const wrapper = css`
  max-width: 480px;
  margin: 0 auto 64px;

  @media (min-width: ${breakpoints.sm}px) {
    max-width: ${breakpoints.sm}px;
  }
  @media (min-width: ${breakpoints.md}px) {
    max-width: ${breakpoints.md}px;
  }
  @media (min-width: ${breakpoints.lg}px) {
    max-width: ${breakpoints.lg}px;
  }
`;

export default IndexPage;
