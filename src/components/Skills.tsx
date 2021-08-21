import React from 'react';
import { css } from '@emotion/react';

import { sectionTitle } from '../styles/styles';

import skills from '../content/skills.json';

const Skills: React.FC = () => {
  return (
    <section>
      <h2 css={sectionTitle}>Skills</h2>

      <h3>Language</h3>
      <ul>
        {skills.language.map((skill) => (
          <li>{skill.name}</li>
        ))}
      </ul>

      <h3>Flamework</h3>
      <ul>
        {skills.flamework.map((skill) => (
          <li>{skill.name}</li>
        ))}
      </ul>

      <h3>Other</h3>
      <ul>
        {skills.other.map((skill) => (
          <li>{skill.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
