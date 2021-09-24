import React from 'react';
import { css } from '@emotion/react';

const ScrollToTop: React.FC = () => {
  const buttonClickHandler = () => {
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
  border: none;
  outline: none;
  border-radius: 4px;
  background-color: #f9f9f9;

  cursor: pointer;
  position: fixed;
  bottom: 50px;
  right: 16px;
  opacity: 0.75;
  box-shadow: 1px 1px 2px 0 rgba(0, 0, 0, 0.25);
  transition: all 0.3s;

  &:hover {
    opacity: 1;
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.25);
    transform: translateY(-2px);
  }

  & span {
    display: inline-block;
    font-size: 2rem;
    transform: rotate(-90deg);
  }
`;

export default ScrollToTop;
