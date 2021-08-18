import React from 'react';
import { css } from '@emotion/react';
import { sectionTitle } from '../styles/styles';

const About: React.FC = () => {
  return (
    <section>
      <h2 css={sectionTitle}>About</h2>
      <dl>
        <dt>Name</dt>
        <dd>y4shiro</dd>
      </dl>
    </section>
  );
};

export default About;
