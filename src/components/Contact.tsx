import React from 'react';
import { css } from '@emotion/react';
import { sectionTitle } from '../styles/styles';
import { ReactSVG } from 'react-svg';

const Contact: React.FC = () => {
  return (
    <section>
      <h2 css={sectionTitle}>Contact</h2>
      <ul>
        <li>
          <a href="mailto:y4shironao@gmail.com" target="_blank">
            E-mail: y4shironao@gmail.com
          </a>
        </li>
        <li>
          <a href="https://github.com/y4shiro/" target="_blank">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://ram.hatenablog.jp/" target="_blank">
            はてなブログ
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
