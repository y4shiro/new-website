import React from 'react';
import { css } from '@emotion/react';

import { StaticImage } from 'gatsby-plugin-image';

const Mainvisual: React.FC = () => {
  return (
    <section css={mainvisual}>
      <StaticImage
        css={image}
        src="../images/mbp.jpg"
        layout="fullWidth"
        alt="Mainvisual"
        placeholder="blurred"
      />
      <div css={logo}>
        <h2>y4shiro's Portfolio</h2>
      </div>
    </section>
  );
};

const mainvisual = css`
  display: grid;
  height: 100vh;
`;

const image = css`
  grid-area: 1/1;

  // 背景画像に半透明のレイヤーを追加
  // StaticImage でもっとスマートな方法あればそちら採用したい
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    z-index: 10;
  }
`;

const logo = css`
  display: grid;
  grid-area: 1/1;
  position: relative;
  place-items: center;
  font-size: 2rem;
  color: #ddd;
  z-index: 20;
`;

export default Mainvisual;
