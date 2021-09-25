import React from 'react';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import ScrollToTop from './ScrollToTop';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}
          ${globalStyles}
          ${h2Styles}
        `}
      ></Global>
      {children}
      <ScrollToTop />
    </>
  );
};

const globalStyles = css`
  body {
    background-color: #e6e6e6;
    font-family: 'Lato', 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN',
      'Hiragino Sans', Meiryo, sans-serif;
  }
`;

const h2Styles = css`
  h2 {
    position: relative;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 2rem;

    &:before {
      content: '';
      position: absolute;
      display: inline-block;
      bottom: -8px;
      width: 60px;
      height: 2px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #ff5a5f;
      border-radius: 2px;
    }
  }
`;

export default Layout;
