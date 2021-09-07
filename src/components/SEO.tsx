import React from 'react';
import { Helmet } from 'react-helmet';

const SEO: React.FC = () => {
  return (
    <Helmet>
      <html lang="ja" />
      <title>y4shiro's Portfolio</title>
      <meta name="description" content="y4shiro のポートフォリオページです" />
    </Helmet>
  );
};

export default SEO;
