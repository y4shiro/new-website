import React from 'react';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
import ScrollToTop from './ScrollToTop';
import { breakpoints } from 'src/styles/styles';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Global
        styles={css`
          ${emotionNormalize}
          ${globalStyles}
          ${h2Styles}
          ${h3Styles}
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
      background-color: #007ab5;
      border-radius: 2px;
    }
  }
`;

const h3Styles = css`
  h3 {
    margin: 0.5rem;
    padding: 0.5rem;
    background-color: #fafafa;
    border-left: solid 4px #007ab5;
    /* border-bottom: solid 1px #999; */
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.1);

    @media (min-width: ${breakpoints.sm}px) {
      margin: 0.5rem 0;
      width: 25%;
    }
    @media (min-width: ${breakpoints.lg}px) {
      width: 20%;
    }
  }
`;

export default Layout;
