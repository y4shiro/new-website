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
      ></StaticImage>
      <h2 css={logo}>y4shiro's Portfolio</h2>
    </section>
  );
};

const mainvisual = css`
  position: relative;
`;

const image = css`
  opacity: 0.7;
`;

const logo = css`
  font-size: 2rem;
`;

export default Mainvisual;
