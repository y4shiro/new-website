import React from 'react';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

import SEO from './SEO';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      <Global
        styles={css`
          ${emotionNormalize}
          ${globalStyles}
        `}
      ></Global>
      {children}
    </>
  );
};

const globalStyles = css`
  body {
    background-color: #e6e6e6;
    font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
      'Hiragino Sans', Meiryo, sans-serif;
  }
`;

export default Layout;
