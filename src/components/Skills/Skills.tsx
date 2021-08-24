import React from 'react';
import { css } from '@emotion/react';

import SkillList from './SkillList';

import { sectionTitle } from 'src/styles/styles';
import skills from 'src/content/skills.json';

const Skills: React.FC = () => {
  return (
    <section>
      <h2 css={sectionTitle}>Skills</h2>

      <h3 css={skillTitleStyle}>Language</h3>
      <SkillList skillList={skills.language} />

      <h3 css={skillTitleStyle}>Framework / Library</h3>
      <SkillList skillList={skills.framework} />

      <h3 css={skillTitleStyle}>Other</h3>
      <SkillList skillList={skills.other} />
    </section>
  );
};

const skillTitleStyle = css`
  margin-bottom: 32px;
`;

export default Skills;
