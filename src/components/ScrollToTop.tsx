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
        <span>&gt;</span>
      </button>
    </>
  );
};

const buttonStyles = css`
  width: 48px;
  height: 48px;
  cursor: pointer;
  position: fixed;
  bottom: 50px;
  right: 16px;
  opacity: 0.75;
  transition: opacity 0.3s;

  &:hover {
    opacity: 1;
  }

  & span {
    display: inline-block;
    font-size: 2rem;
    transform: rotate(-90deg);
  }
`;

export default ScrollToTop;
