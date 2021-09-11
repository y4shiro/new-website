import React, { useState, useEffect } from 'react';
import { css } from '@emotion/react';
import { sectionTitle } from '../styles/styles';

import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const GithubGraph: React.FC = () => {
  // const [imgSrc, setImgSrc] = useState('');

  // const firebaseConfig = {
  //   apiKey: process.env.FIREBASE_API_KEY,
  //   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  //   projectId: process.env.FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  //   appId: process.env.FIREBASE_APP_ID,
  // };
  // const app = initializeApp(firebaseConfig);
  // const storage = getStorage(app);
  // const imageRef = ref(storage, 'y4shiro.svg');

  // useEffect(() => {
  //   getDownloadURL(imageRef).then((url) => setImgSrc(url));
  // }, []);
  console.log(process.env.TEST);
  console.log(process.env.FIREBASE_STORAGE_BUCKET);

  return (
    <section>
      <a href="https://github.com/y4shiro" target="_blank">
        {/* <img css={imgStyles} src={imgSrc} /> */}
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
