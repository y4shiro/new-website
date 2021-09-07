import React from 'react';
import { css } from '@emotion/react';
import { ReactSVG } from 'react-svg';

import { breakpoints } from 'src/styles/styles';

const Footer: React.FC = () => {
  const iconSrc = `/skillIcons/github.svg`;

  return (
    <footer css={footerStyles}>
      <ul css={ulStyles}>
        <li>
          <span>&copy; 2021 y4shiro</span>
        </li>
        <li>
          <a href="https://github.com/y4shiro/website" target="_blank">
            <ReactSVG src={iconSrc} css={iconStyles} />
            View this site on GitHub
          </a>
        </li>
      </ul>
    </footer>
  );
};

const footerStyles = css`
  width: 100%;
  background-color: #333;
`;

const ulStyles = css`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
  padding: 1.5rem 0;
  color: #ddd;
  font-size: 0.8rem;

  li {
    list-style: none;

    & > a {
      display: flex;
      align-items: center;
      color: #ddd;
      transition: opacity 0.3s ease;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  @media (min-width: ${breakpoints.sm}px) {
    width: 90%;
    flex-direction: row;
    justify-content: space-between;
    gap: 0;
    padding: 1.5rem 0;
  }
`;

const iconStyles = css`
  width: 1rem;
  margin-right: 0.25rem;
  fill: #ddd;
`;

export default Footer;
