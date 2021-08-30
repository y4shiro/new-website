import React from 'react';
import { ReactSVG } from 'react-svg';
import { css } from '@emotion/react';

type Skill = {
  name: string;
  iconPath: string;
  colorCode?: string;
  backgroundColor?: string;
};

// SkillItem (カード) の背景色
const ItemBGColor = '#fafafa';

const SkillItem: React.FC<Skill> = ({
  name,
  iconPath,
  colorCode = 'black',
  backgroundColor = ItemBGColor,
}) => {
  const iconSrc = `/skillIcons/${iconPath}.svg`;

  return (
    <li css={liStyles(colorCode, backgroundColor)}>
      <h4>{name}</h4>
      <ReactSVG src={iconSrc} />
    </li>
  );
};

const liStyles = (colorCode: string, backgroundColor: string) => {
  return css`
    padding: 4px;
    background-color: ${ItemBGColor};
    list-style: none;
    text-align: center;
    border: solid 1px rgba(0, 0, 0, 0);
    border-radius: 4px;
    box-shadow: 2px 2px 5px 4px #ddd;
    transition: all 0.3s ease-in-out;

    // 子要素(SVG アイコン)のスタイル定義
    svg {
      margin: 16px auto;
      padding: 0;
      width: 92px;
      fill: black;
      transition: all 0.3s ease-out;
    }

    &:hover {
      box-shadow: 5px 5px 5px 4px #ccc;
      border: solid 1px rgba(0, 0, 0, 0.2);
      transform: translateY(-2%);

      // 親要素をホバーしたときに子要素の色を変更
      // デフォの背景色と色の相性が悪いテーマカラーの場合は skills.json 側で背景色を個別設定
      svg {
        background-color: ${backgroundColor};
        fill: ${colorCode};
      }
    }
  `;
};

export default SkillItem;
