import React from 'react';
import { css } from '@emotion/react';

const Header: React.FC = () => {
  return (
    <header css={header}>
      <h1 css={titleLogo}>
        <a href="/">y4shiro.net</a>
      </h1>

      <nav>
        <ul css={ul}>
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
    </header>
  );
};

const header = css`
  background-color: white;
  padding: 16px 30px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// a タグのスタイルは複数箇所で使用するので、header から分離した
const anchor = css`
  a {
    text-decoration: none;
    color: #4b4b4b;
  }
`;

const titleLogo = css`
  ${anchor}; // anchor 継承
  margin: 0;
  padding: 0;
  font-size: 1.5em;
`;

const ul = css`
  display: flex;
  list-style: none;

  li {
    ${anchor}; // anchor 継承
    margin-left: 15px;
    font-size: 0.9em;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export default Header;
