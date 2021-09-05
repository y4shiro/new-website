import React from 'react';

import SkillList from './SkillList';

import { sectionTitle } from 'src/styles/styles';
import skills from 'src/content/skills.json';

const Skills: React.FC = () => {
  const marginParams = { bottom: 64 };

  return (
    <section>
      <h2 css={sectionTitle}>Skills</h2>

      {Object.values(skills).map((skill, index) => (
        <SkillList key={index} margin={marginParams} {...skill} />
      ))}
    </section>
  );
};

export default Skills;
