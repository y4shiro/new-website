import React, { useState } from 'react';
import { css } from '@emotion/react';

import HamburgerButton from './HamburgerButton';
import HamburgerMenu from './HamburgerMenu';

const Header: React.FC = () => {
  // ハンバーガーメニューの開閉管理
  const [open, setOpen] = useState(false);

  return (
    <header css={headerStyle}>
      <h1 css={logoStyle}>
        <a href="/">y4shiro.net</a>
      </h1>

      <HamburgerMenu open={open} setOpen={setOpen} anchorStyle={anchorStyle} />
      {/* <HamburgerButton open={open} setOpen={setOpen} /> */}
    </header>
  );
};

// a タグのスタイルは複数箇所で使用するので、header から分離した
const anchorStyle = css`
  a {
    text-decoration: none;
    color: #eee;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const headerStyle = css`
  background-color: #2a2a2a;
  padding: 16px 30px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const logoStyle = css`
  ${anchorStyle}; // anchor 継承
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
`;

export default Header;
