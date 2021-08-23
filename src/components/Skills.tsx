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
          <Skill name={skill.name} iconPath={skill.iconPath} key={skill.name} />
        ))}
      </ul>

      <h3>Flamework</h3>
      <ul>
        {skills.flamework.map((skill) => (
          <Skill name={skill.name} iconPath={skill.iconPath} key={skill.name} />
        ))}
      </ul>

      <h3>Other</h3>
      <ul>
        {skills.other.map((skill) => (
          <Skill name={skill.name} iconPath={skill.iconPath} key={skill.name} />
        ))}
      </ul>
    </section>
  );
};

type skillProps = {
  name: string;
  iconPath: string;
};

const Skill: React.FC<skillProps> = ({ name, iconPath }) => {
  const src = `/skillIcons/${iconPath}.svg`;

  return (
    <li>
      <p>{name}</p>
      <img src={src} width="32px" alt="" />
    </li>
  );
};

export default Skills;
