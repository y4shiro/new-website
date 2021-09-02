import React from 'react';
import { css } from '@emotion/react';
import { sectionTitle } from '../styles/styles';
import { ReactSVG } from 'react-svg';

const Contact: React.FC = () => {
  return (
    <section>
      <h2 css={sectionTitle}>Contact</h2>
      <ul css={ulStyle}>
        <li css={liStyle}>
          <a href="mailto:y4shironao@gmail.com" target="_blank">
            <ReactSVG src="/contact/gmail.svg" />
          </a>
        </li>
        <li css={liStyle}>
          <a href="https://github.com/y4shiro/" target="_blank">
            <ReactSVG src="/skillIcons/github.svg" />
          </a>
        </li>
        <li css={liStyle}>
          <a href="https://ram.hatenablog.jp/" target="_blank">
            <ReactSVG src="/contact/hatenabookmark.svg" />
          </a>
        </li>
      </ul>
    </section>
  );
};

const ulStyle = css`
  display: flex;
  justify-content: center;
  gap: 32px;
  list-style: none;
  padding: 0;
`;

const liStyle = css`
  width: 48px;
  height: 48px;
`;

export default Contact;
