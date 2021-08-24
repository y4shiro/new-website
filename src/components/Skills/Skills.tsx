import React from 'react';

import SkillList from './SkillList';

import { sectionTitle } from 'src/styles/styles';
import skills from 'src/content/skills.json';

const Skills: React.FC = () => {
  const marginParams = { bottom: 64 };

  return (
    <section>
      <h2 css={sectionTitle}>Skills</h2>

      <SkillList margin={marginParams} {...skills.language} />
      <SkillList margin={marginParams} {...skills.framework} />
      <SkillList margin={marginParams} {...skills.other} />
    </section>
  );
};

export default Skills;
