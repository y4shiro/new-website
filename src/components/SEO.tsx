import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

type Props = {
  title?: string;
  description?: string;
};

const SEO: React.FC<Props> = ({ title, description }) => {
  const { site } = useStaticQuery(query);
  const { defaultTitle, defaultDescription, titleTemplate } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  };

  return (
    <Helmet titleTemplate={titleTemplate}>
      <html lang="ja" />
      <title>{defaultTitle}</title>
      <meta name="description" content={defaultDescription} />
    </Helmet>
  );
};

const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        defauultDescription: description
        titleTemplate
      }
    }
  }
`;

export default SEO;
