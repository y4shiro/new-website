import React from 'react';
import { css } from '@emotion/react';
import { SectionTitle } from '../styles/Styles';

const About: React.FC = () => {
  return (
    <section>
      <h2 css={SectionTitle}>About</h2>
      <dl>
        <dt>Name</dt>
        <dd>y4shiro</dd>
      </dl>
    </section>
  );
};

export default About;
