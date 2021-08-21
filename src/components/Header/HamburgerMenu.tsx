import React from 'react';
import { css } from '@emotion/react';
import { breakpoints } from '../../styles/styles';
import { SerializedStyles } from '@emotion/react';

type Props = {
  open: boolean;
  setOpen: Function;
  anchorStyle: SerializedStyles;
};

const HamburgerMenu: React.FC<Props> = ({ open, setOpen, anchorStyle }) => {
  return (
    <>
      <nav>
        <ul css={hamburgerMenuStyle(anchorStyle)}>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

const hamburgerMenuStyle = (anchorStyle: SerializedStyles) => css`
  display: flex;
  list-style: none;

  li {
    ${anchorStyle}; // anchor 継承
    margin-left: 15px;
    font-size: 0.9em;
  }
`;

export default HamburgerMenu;
