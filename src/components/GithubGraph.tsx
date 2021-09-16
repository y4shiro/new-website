import React, { useEffect, useState } from 'react';
import { css } from '@emotion/react';

const GithubGraph: React.FC = () => {
  const [img, setImg] = useState('');
  const firebaseConfig = {
    storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
    storageToken: process.env.GATSBY_FIREBASE_STORAGE_TOKEN,
  };
  const imgSrc = `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/y4shiro.svg?alt=media&token=${firebaseConfig.storageToken}`;

  useEffect(() => {
    fetch(imgSrc, { mode: 'cors' })
      .then((res) => res.blob())
      .then((image) => setImg(URL.createObjectURL(image)));
  }, []);

  return (
    <section css={sectionStyles}>
      <a
        href="https://github.com/y4shiro"
        target="_blank"
        aria-label="GitHubページへ移動"
      >
        <img css={imgStyles} src={img} alt="GitHub Contribute Graph" />
      </a>
    </section>
  );
};

const sectionStyles = css`
  text-align: center;
`;

const imgStyles = css`
  width: 100%;
  max-width: 768px;
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
