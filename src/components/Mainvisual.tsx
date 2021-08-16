import React from 'react';
import { css } from '@emotion/react';

import { StaticImage } from 'gatsby-plugin-image';

const Mainvisual: React.FC = () => {
  return (
    <section css={mainvisual}>
      <StaticImage
        css={image}
        src="../images/mbp.jpg"
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
`;

const image = css`
  grid-area: 1/1;
  opacity: 0.7;
`;

const logo = css`
  display: grid;
  grid-area: 1/1;
  position: relative;
  place-items: center;
  font-size: 2rem;
`;

export default Mainvisual;
