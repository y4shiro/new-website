import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';

import { getGraphImage } from 'src/utils/getGraphFirebase';

const GithubGraph: React.FC = () => {
  const [img, setImg] = useState('');

  useEffect(() => {
    const getImg = async () => {
      const img: string | undefined = await getGraphImage();
      if (img !== undefined) setImg(img);
    };
    getImg();
  }, []);

  return (
    <section css={sectionStyles}>
      <a
        href="https://github.com/y4shiro"
        target="_blank"
        aria-label="GitHubページへ移動"
      >
        <img
          css={imgStyles}
          src={img}
          width="712"
          height="140"
          alt="GitHub Contribute Graph"
        />
      </a>
    </section>
  );
};

const sectionStyles = css`
  margin: 0 auto;
  max-width: 712px;
`;

const imgStyles = css`
  height: auto;
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
