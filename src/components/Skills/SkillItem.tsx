import React from 'react';
import { ReactSVG } from 'react-svg';
import { css } from '@emotion/react';

type Skill = {
  name: string;
  iconPath: string;
  colorCode?: string;
};

const SkillItem: React.FC<Skill> = ({
  name,
  iconPath,
  colorCode = 'black',
}) => {
  const iconSrc = `/skillIcons/${iconPath}.svg`;

  return (
    <li css={liStyles(colorCode)}>
      <h4>{name}</h4>
      <ReactSVG src={iconSrc} />
    </li>
  );
};

const liStyles = (colorCode: string) => {
  return css`
    width: 46%;
    padding: 4px;
    background-color: #fafafa;
    list-style: none;
    text-align: center;
    border-radius: 4px;
    box-shadow: 2px 2px 5px 4px #ddd;
    transition: 0.3s ease-in-out;

    // 子要素(SVG アイコン)のスタイル定義
    svg {
      margin: 16px auto;
      padding: 0;
      width: 92px;
      fill: black;
      transition: 0.2s ease-out;
    }

    &:hover {
      box-shadow: 5px 5px 5px 4px #ccc;
      transform: translateY(-2%);

      // 親要素をホバーしたときに子要素の色を変更
      svg {
        fill: ${colorCode};
      }
    }
  `;
};

export default SkillItem;
