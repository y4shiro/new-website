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
        <h1>y4shiro's Portfolio</h1>
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
    background: rgba(0, 0, 0, 0.8);
    z-index: 10;
  }
`;

const logo = css`
  display: grid;
  grid-area: 1/1;
  position: relative;
  place-items: center;
  font-family: 'Josefin Sans';
  color: #ddd;
  z-index: 20;

  h1 {
    font-size: 2.75rem;
    font-weight: 400;

    @media (min-width: ${breakpoints.sm}px) {
      font-size: 3.5rem;
    }
    @media (min-width: ${breakpoints.md}px) {
      font-size: 4rem;
    }
    @media (min-width: ${breakpoints.lg}px) {
      font-size: 4.5rem;
    }
    @media (min-width: ${breakpoints.xl}px) {
      font-size: 5rem;
    }
  }
`;

export default Hero;
