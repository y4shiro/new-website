import React from 'react';
import { css } from '@emotion/react';
import { breakpoints } from '../styles/styles';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import Header from '../components/Header/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import GithubGraph from 'src/components/GithubGraph';

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
