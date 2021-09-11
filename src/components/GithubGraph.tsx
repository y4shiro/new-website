import React from 'react';
import { css } from '@emotion/react';
import { sectionTitle } from '../styles/styles';

const GithubGraph: React.FC = () => {
  return (
    <section>
      <a href="https://github.com/y4shiro" target="_blank">
        <img
          css={imgStyles}
          src="https://github-contributions-api.deno.dev/y4shiro.svg"
        />
      </a>
    </section>
  );
};

const imgStyles = css`
  width: 100%;
  background-color: #fefefe;
  border-radius: 8px;
  box-shadow: 2px 2px 5px 4px #ddd;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 5px 5px 5px 4px #ccc;
    transform: translateY(-2%);
  }
`;

export default GithubGraph;