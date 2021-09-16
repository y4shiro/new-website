import { css } from '@emotion/react';

const GithubGraph: React.FC = () => {
  const firebaseConfig = {
    storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
    storageToken: process.env.GATSBY_FIREBASE_STORAGE_TOKEN,
  };
  const imgSrc = `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/y4shiro.svg?alt=media&token=${firebaseConfig.storageToken}`;

  return (
    <section>
      <a href="https://github.com/y4shiro" target="_blank">
        <img css={imgStyles} src={imgSrc} />
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
