import React from 'react';
import { css } from '@emotion/react';

type Skill = {
  name: string;
  iconPath: string;
};

const SkillItem: React.FC<Skill> = ({ name, iconPath }) => {
  const iconPathSrc = `/skillIcons/${iconPath}.svg`;

  return (
    <li css={liStyles} key={name}>
      <div>
        <p>{name}</p>
        <img src={iconPathSrc} alt="" />
      </div>
    </li>
  );
};

const liStyles = css`
  width: 46%;
  padding: 4px;
  background-color: #fafafa;
  list-style: none;
  text-align: center;
  border-radius: 4px;
  box-shadow: 2px 2px 5px 4px #ddd;
  transition: 0.2s ease-in-out;

  div {
    padding: 0 16px 16px 16px;

    p {
      font-size: 1.125rem;
    }
    img {
      max-width: 4rem;
      margin: 16px;
    }
  }

  &:hover {
    box-shadow: 5px 5px 5px 4px #ccc;
    transform: translateY(-2%);
  }
`;

export default SkillItem;
