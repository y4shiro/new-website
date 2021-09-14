import React from 'react';
import { css } from '@emotion/react';

import { StaticImage } from 'gatsby-plugin-image';
import { breakpoints } from '../styles/styles';

const Hero: React.FC = () => {
  return (
    <section css={hero}>
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

const hero = css`
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
  font-family: 'Josefin Sans';
  font-size: 1.25rem;
  color: #ddd;
  z-index: 20;

  @media (min-width: ${breakpoints.sm}px) {
    font-size: 2rem;
  }
  @media (min-width: ${breakpoints.lg}px) {
    font-size: 2.5rem;
  }
`;

export default Hero;
