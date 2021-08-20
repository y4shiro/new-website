import React from 'react';
import { css } from '@emotion/react';
import { breakpoints } from '../../styles/styles';

type Props = {
  open: boolean;
  setOpen: Function;
};

const HamburgerButton: React.FC<Props> = ({ open, setOpen }) => {
  const onClickHandler = () => setOpen(!open);

  return (
    <>
      <div css={hamburgerStyle(open)} onClick={onClickHandler}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

const hamburgerStyle = (open: boolean) => {
  return css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 32px;
    height: 32px;
    position: relative;
    cursor: pointer;
    z-index: 20;

    @media (min-width: ${breakpoints.sm}px) {
      display: none;
    }

    div {
      width: 34px;
      height: 4px;
      background-color: #ccc;
      border-radius: 10px;
      transform-origin: 1px;
      transition: all 0.3s ease-out;

      &:nth-of-type(1) {
        transform: ${open ? 'rotate(45deg)' : 'rotate(0)'};
      }
      &:nth-of-type(2) {
        transform: ${open ? 'translateX(100%)' : 'translateX(0)'};
        opacity: ${open ? 0 : 1};
      }
      &:nth-of-type(3) {
        transform: ${open ? 'rotate(-45deg)' : 'rotate(0)'};
      }
    }
  `;
};

export default HamburgerButton;
