import React from 'react';
import { css } from '@emotion/react';

import SkillList from './SkillList';

import { sectionTitle } from 'src/styles/styles';
import skills from 'src/content/skills.json';

const Skills: React.FC = () => {
  return (
    <section>
      <h2 css={sectionTitle}>Skills</h2>

      <h3>Language</h3>
      <SkillList skillList={skills.language} />

      <h3>Flamework</h3>
      <SkillList skillList={skills.flamework} />

      <h3>Other</h3>
      <SkillList skillList={skills.other} />
    </section>
  );
};

export default Skills;
