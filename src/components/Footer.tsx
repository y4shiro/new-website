import React from 'react';
import { css } from '@emotion/react';

const Footer: React.FC = () => {
  return (
    <footer css={footer}>
      <span>&copy; 2021 y4shiro</span>
    </footer>
  );
};

const footer = css`
  padding: 30px;
  text-align: center;
  background-color: #222;
  color: #ddd;
  font-size: 0.75rem;
`;

export default Footer;
