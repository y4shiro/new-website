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
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Lato:100,300,400,700,900',
          'Josefin Sans:100,200,300,400,500,600,700',
          'Open Sans:300,400,600,700,800',
          'Titillium Web:200,300,400,600,700,900',
          'Play:400,700',
          'Rubik:300,400,500,600,700,800,900',
          'Rokkitt:100,200,300,400,500,600,700,800,900',
          'Roboto:100,300,400,500,700,900',
        ],
        display: 'swap',
      },
    },
  ],
};
