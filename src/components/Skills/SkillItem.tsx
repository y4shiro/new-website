import React from 'react';
import { ReactSVG } from 'react-svg';
import { css } from '@emotion/react';

type Skill = {
  name: string;
  iconPath: string;
};

const SkillItem: React.FC<Skill> = ({ name, iconPath }) => {
  const iconSrc = `/skillIcons/${iconPath}.svg`;

  return (
    <li css={liStyles}>
      <div>
        <h4>{name}</h4>
        <ReactSVG src={iconSrc} />
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
  transition: 0.3s ease-in-out;

  div {
    margin: 16px auto;
    padding: 0;
    width: 92px;
    fill: black;
    transition: 0.2s ease-out;
  }

  &:hover {
    box-shadow: 5px 5px 5px 4px #ccc;
    transform: translateY(-2%);

    div {
      fill: red;
    }
  }
`;

export default SkillItem;
