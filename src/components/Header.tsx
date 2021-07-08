import React from 'react';
import { css } from '@emotion/react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>y4shiro.net</h1>

      <div>
        <ul>
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
      </div>
    </header>
  );
};

export default Header;
