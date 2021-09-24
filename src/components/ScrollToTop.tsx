import React from 'react';
import { css } from '@emotion/react';

const ScrollToTop: React.FC = () => {
  const buttonClickHandler = () => {
    console.log('トップに戻るボタンを押した');

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <button css={buttonStyles} onClick={buttonClickHandler}>
        トップに戻る
      </button>
    </>
  );
};

const buttonStyles = css`
  position: fixed;
  bottom: 50px;
  right: 50px;
`;

export default ScrollToTop;
