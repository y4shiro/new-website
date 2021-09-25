import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import smoothscroll from 'smoothscroll-polyfill';

const ScrollToTop: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  const buttonClickHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    smoothscroll.polyfill();

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
        <div></div>
      </button>
    </>
  );
};

const buttonStyles = (isShowButton: boolean) => {
  const whiteColor = '#f9f9f9';
  const blackColor = '#666';

  const opacityVal = isShowButton ? 0.75 : 0;
  const pointerEventsVal = isShowButton ? 'auto' : 'none';
  const visibleVal = isShowButton ? 'visible' : 'hidden';

  return css`
    width: 48px;
    height: 48px;
    padding: 0;
    border: none;
    outline: none;
    border-radius: 4px;
    background-color: ${whiteColor};

    cursor: pointer;
    pointer-events: ${pointerEventsVal};
    position: fixed;
    bottom: 50px;
    right: 16px;
    opacity: ${opacityVal};
    visibility: ${visibleVal};
    box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.25);
    transition: all 0.3s;

    &:hover {
      opacity: 1;
      box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.25);
      transform: translateY(-2px);
    }

    & > div {
      position: relative;

      &::before {
        content: '';
        width: 16px;
        height: 16px;
        border: 0px;
        border-top: solid 4px ${blackColor};
        border-right: solid 4px ${blackColor};
        border-radius: 2px;
        transform: rotate(-45deg);
        position: absolute;
        top: 50%;
        left: 30%;
        margin-top: -4px;
      }
    }
  `;
};

export default ScrollToTop;
