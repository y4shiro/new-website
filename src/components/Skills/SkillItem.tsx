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
      <h4>
        <span>{name}</span>
      </h4>
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

    h4 {
      margin: 0.5rem 0 0.5rem;
      font-size: 0.9rem;

      @media (min-width: ${breakpoints.sm}px) {
        margin: 1rem 0 0.5rem;
        font-size: 1rem;
      }

      & > span {
        position: relative;

        &::after {
          content: '';
          position: absolute;
          background-color: ${iconColor};
          bottom: -8px;
          left: -5%;
          width: 100%;
          height: 2px;
          transform: scale(0, 1);
          transform-origin: left;
          transition: all 0.3s ease-in-out;
        }
      }
    }

    // 子要素(SVG アイコン)のスタイル定義
    svg {
      margin: 4px auto;
      padding: 0;
      width: 48px;
      background-color: ${iconBgColor};
      fill: ${iconColor};
      transition: all 0.3s ease-out;

      @media (min-width: ${breakpoints.sm}px) {
        margin: 12px auto;
        width: 56px;
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

      h4 > span::after {
        transform: scale(1.1, 1);
      }
    }
  `;
};

export default SkillItem;
