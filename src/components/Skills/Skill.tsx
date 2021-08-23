import React from 'react';
import { css } from '@emotion/react';

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

export default Skill;
