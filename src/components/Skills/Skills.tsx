import React from 'react';

import SkillList from './SkillList';
import skills from 'src/content/skills.json';

const Skills: React.FC = () => {
  const marginParams = { bottom: 48 };

  return (
    <section>
      <h2>Skills</h2>

      {Object.values(skills).map((skill, index) => (
        <SkillList key={index} margin={marginParams} {...skill} />
      ))}
    </section>
  );
};

export default Skills;
