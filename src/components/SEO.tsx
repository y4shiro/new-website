import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

type Props = {
  title?: string;
  description?: string;
};

const SEO: React.FC<Props> = ({ title, description }) => {
  const { site } = useStaticQuery(query);
  const { defaultTitle, defaultDescription, titleTemplate, siteUrl } =
    site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    siteUrl: siteUrl,
  };

  return (
    <Helmet titleTemplate={titleTemplate}>
      <html lang="ja" />
      <title>{seo.title}</title>
      <meta name="description" content={defaultDescription} />
      <link rel="canonical" href={seo.siteUrl} />
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
        siteUrl
      }
    }
  }
`;

export default SEO;
