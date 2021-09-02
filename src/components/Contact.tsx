import React from 'react';
import { css } from '@emotion/react';
import { sectionTitle } from '../styles/styles';

const Contact: React.FC = () => {
  return (
    <section>
      <h2 css={sectionTitle}>Contact</h2>
      <ul>
        <li>E-mail: y4shironao@gmail.com</li>
        <li>GitHub: https://github.com/y4shiro/</li>
        <li>はてなブログ: https://ram.hatenablog.jp/</li>
      </ul>
    </section>
  );
};

export default Contact;
