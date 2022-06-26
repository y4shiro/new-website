import React from 'react';
import { css } from '@emotion/react';
import { breakpoints } from 'src/styles/styles';

import hex2rgba from 'src/utils/hex2rgba';
import { StaticImage } from 'gatsby-plugin-image';

type Skill = {
  name: string;
  description?: string;
};

// SkillItem (カード) の背景色
const ItemBgColor = '#fafafa';

const thumbSrc = `../../images/sunset.png`;

const ProductItem: React.FC<Skill> = ({ name, description }) => {
  return (
    <li css={liStyles()}>
      <h4>
        <span>{name}</span>
      </h4>
      <StaticImage
        src={thumbSrc}
        layout="constrained"
        alt="プロダクトのサムネイル"
      />
      {description ? <p>{description}</p> : null}
    </li>
  );
};

const liStyles = (iconColor: string = '#000', iconBgColor: string = '#000') => {
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
      margin: 1rem 0 1.5rem;
      font-size: 1.5rem;

      @media (min-width: ${breakpoints.sm}px) {
        font-size: 1.5rem;
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

    &:hover {
      border: ${hoverBorderColorParams};
      box-shadow: 5px 5px 5px 4px #ccc;
      transform: translateY(-2%);

      h4 > span::after {
        transform: scale(1.1, 1);
      }
    }
  `;
};

export default ProductItem;
