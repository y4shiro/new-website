import React from 'react';
import { css } from '@emotion/react';

type skillProps = {
  skillList: {
    name: string;
    iconPath: string;
  }[];
};

const NewSkill: React.FC<skillProps> = ({ skillList }) => {
  return (
    <ul>
      {skillList.map((skill) => {
        const src = `/skillIcons/${skill.iconPath}.svg`;

        return (
          <li key={skill.name}>
            <p>{skill.name}</p>
            <img src={src} width="32px" alt="" />
          </li>
        );
      })}
    </ul>
  );
};

export default NewSkill;
