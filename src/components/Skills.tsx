import React from 'react';
import { css } from '@emotion/react';
import { sectionTitle } from '../styles/styles';

const Skills: React.FC = () => {
  return (
    <section>
      <h2 css={sectionTitle}>Skills</h2>
      <ul>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React.js</li>
        <li>Vue.js</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Node.js</li>
        <li>Ruby on Rails</li>
        <li>Linux</li>
        <li>AWS</li>
      </ul>
    </section>
  );
};

export default Skills;
