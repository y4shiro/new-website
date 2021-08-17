import React from 'react';
import { css } from '@emotion/react';
import { SectionTitle } from '../styles/Styles';

const Contact: React.FC = () => {
  return (
    <section>
      <h2 css={SectionTitle}>Contact</h2>
      <ul>
        <li>y4shironao@gmail.com</li>
        <li>GitHub</li>
      </ul>
    </section>
  );
};

export default Contact;
