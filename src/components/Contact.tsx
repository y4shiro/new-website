import React from 'react';
import { css } from '@emotion/react';
import { ReactSVG } from 'react-svg';

const Contact: React.FC = () => {
  return (
    <section>
      <h2>Contact</h2>
      <ul css={ulStyle}>
        <li>
          <a href="mailto:y4shironao@gmail.com" target="_blank">
            <ReactSVG src="/contact/gmail.svg" css={svgStyle('#EA4335')} />
          </a>
        </li>
        <li>
          <a href="https://github.com/y4shiro/" target="_blank">
            <ReactSVG src="/skillIcons/github.svg" css={svgStyle('#181717')} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/y4shiro_" target="_blank">
            <ReactSVG src="/contact/twitter.svg" css={svgStyle('#1DA1F2')} />
          </a>
        </li>
        <li>
          <a href="https://ram.hatenablog.jp/" target="_blank">
            <ReactSVG
              src="/contact/hatenabookmark.svg"
              css={svgStyle('#00A4DE')}
            />
          </a>
        </li>
      </ul>
    </section>
  );
};

const ulStyle = css`
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 32px;
`;

const svgStyle = (svgColor: string) => {
  return css`
    svg {
      width: 48px;
      height: 48px;
      transition: all 0.3s ease;

      &:hover {
        opacity: 0.8;
        fill: ${svgColor};
      }
    }
  `;
};

export default Contact;
