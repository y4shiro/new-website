import React from 'react';
import { css } from '@emotion/react';

import HamburgerButton from './HamburgerButton';

const Header: React.FC = () => {
  return (
    <header css={header}>
      <h1 css={logo}>
        <a href="/">y4shiro.net</a>
      </h1>

      <nav>
        <ul css={navmenu}>
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

      <HamburgerButton />
    </header>
  );
};

// a タグのスタイルは複数箇所で使用するので、header から分離した
const anchor = css`
  a {
    text-decoration: none;
    color: #eee;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const header = css`
  background-color: #2a2a2a;
  padding: 16px 30px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const logo = css`
  ${anchor}; // anchor 継承
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
`;

const navmenu = css`
  display: flex;
  list-style: none;

  li {
    ${anchor}; // anchor 継承
    margin-left: 15px;
    font-size: 0.9em;
  }
`;

export default Header;
