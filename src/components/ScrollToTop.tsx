import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

const ScrollToTop: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  const buttonClickHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const checkScrollHeight = () => {
      if (window.scrollY > window.innerHeight) setShowButton(true);
      else setShowButton(false);
    };

    window.addEventListener('scroll', checkScrollHeight);
    return () => {
      window.removeEventListener('scroll', checkScrollHeight);
    };
  }, []);

  return (
    <>
      <button css={buttonStyles(showButton)} onClick={buttonClickHandler}>
        <span>&gt;</span>
      </button>
    </>
  );
};

const buttonStyles = (isShowButton: boolean) => {
  const opacityVal = isShowButton ? 0.75 : 0;
  const pointerEventsVal = isShowButton ? 'auto' : 'none';

  return css`
    width: 48px;
    height: 48px;
    border: none;
    outline: none;
    border-radius: 4px;
    background-color: #f9f9f9;

    cursor: pointer;
    pointer-events: ${pointerEventsVal};
    position: fixed;
    bottom: 50px;
    right: 16px;
    opacity: ${opacityVal};
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
};

export default ScrollToTop;
