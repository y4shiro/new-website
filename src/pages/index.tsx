import React from 'react';
import { css } from '@emotion/react';
import { breakpoints } from '../styles/styles';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Header from '../components/Header/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import GithubGraph from 'src/components/GithubGraph';
import Skills from '../components/Skills/Skills';
import Products from 'src/components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO ogType="website" />
      {/* <Header /> */}
      <Hero />

      <main css={wrapper}>
        <About />
        <GithubGraph />
        <Skills />
        <Products />
        <Contact />
      </main>

      <Footer />
    </Layout>
  );
};

const wrapper = css`
  max-width: 95%;
  margin: 0 auto 64px;

  @media (min-width: ${breakpoints.xl}px) {
    max-width: ${breakpoints.xl}px;
  }
`;

export default IndexPage;
