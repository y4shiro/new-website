import React from 'react';
import { ReactSVG } from 'react-svg';
import { css } from '@emotion/react';
import { breakpoints } from 'src/styles/styles';

import hex2rgba from 'src/utils/hex2rgba';

type Skill = {
  name: string;
  iconFileName: string;
  iconColor?: string;
  iconBgColor?: string;
  description?: string;
};

// SkillItem (カード) の背景色
const ItemBgColor = '#fafafa';

const SkillItem: React.FC<Skill> = ({
  name,
  iconFileName,
  iconColor = '#000000',
  iconBgColor = ItemBgColor,
  description,
}) => {
  const iconSrc = `/skillIcons/${iconFileName}.svg`;

  return (
    <li css={liStyles(iconColor, iconBgColor)}>
      <h4>{name}</h4>
      <ReactSVG src={iconSrc} />
      {description ? <p>{description}</p> : null}
    </li>
  );
};

const liStyles = (iconColor: string, iconBgColor: string) => {
  // アイコンの色に応じたホバー時のボーダー色を決める
  const borderColor = hex2rgba(iconColor, 0.7);
  const hoverBorderColorParams = `solid 1px rgba(${borderColor})`;

  return css`
    padding: 4px;
    background-color: ${ItemBgColor};
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
      background-color: ${iconBgColor};
      fill: ${iconColor};
      transition: all 0.3s ease-out;

      @media (min-width: ${breakpoints.sm}px) {
        background-color: ${ItemBgColor};
        fill: black;
      }
    }

    &:hover {
      border: ${hoverBorderColorParams};
      box-shadow: 5px 5px 5px 4px #ccc;
      transform: translateY(-2%);

      // 親要素をホバーしたときに子要素の色を変更
      // デフォの背景色と色の相性が悪いテーマカラーの場合は skills.json 側で背景色を個別設定
      svg {
        background-color: ${iconBgColor};
        fill: ${iconColor};
      }
    }
  `;
};

export default SkillItem;
