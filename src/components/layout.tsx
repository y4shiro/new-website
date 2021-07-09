import React from 'react';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}
          body {
            background-color: #e6e6e6;
          }
        `}
      ></Global>
      {children}
    </>
  );
};

export default Layout;
