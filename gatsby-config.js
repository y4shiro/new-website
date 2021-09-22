require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: "y4shiro's Portforio",
    description: 'y4shiro のポートフォリオページ',
    siteUrl: 'https://y4shiro.net/',
    siteName: 'y4shiro.net',
    titleTemplate: '%s | y4shiro.net',
  },
  plugins: [
    'gatsby-plugin-emotion',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-76076401-1',
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    'gatsby-plugin-root-import',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google2: [
            {
              family: 'Josefin Sans',
              strategy: 'cdn',
            },
            {
              family: 'Lato',
              axes: 'wght@700',
              strategy: 'cdn',
            },
          ],
        },
        formats: ['woff2'],
        useMinify: true,
        usePreload: true,
        usePreconnect: true,
      },
    },
  ],
};
