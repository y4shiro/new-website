import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

import axios from 'axios';

const firebaseConfig = {
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageRef = ref(storage, 'github_graph.svg');

const getGraphImage = async (): Promise<string | undefined> => {
  try {
    const downloadUrl = await getDownloadURL(storageRef);
    const res = await axios.get(downloadUrl, { responseType: 'blob' });
    const image = URL.createObjectURL(res.data);

    return image;
  } catch (e) {
    console.error('error', e);
  }
};

export { getGraphImage };
