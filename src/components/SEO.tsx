import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';
import { useLocation } from '@reach/router';

type Props = {
  title?: string;
  description?: string;
};

const SEO: React.FC<Props> = ({ title, description }) => {
  const { site } = useStaticQuery(query);
  const { defaultTitle, defaultDescription, titleTemplate, siteUrl } =
    site.siteMetadata;
  const location = useLocation();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    siteUrl: siteUrl,
    ogType: siteUrl === location.href ? 'website' : 'webpage',
  };

  return (
    <Helmet titleTemplate={titleTemplate}>
      <html lang="ja" />
      <title>{seo.title}</title>
      <meta name="description" content={defaultDescription} />
      <link rel="canonical" href={seo.siteUrl} />

      <meta property="og:type" content={seo.ogType} />
    </Helmet>
  );
};

const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        titleTemplate
        siteUrl
      }
    }
  }
`;

export default SEO;
