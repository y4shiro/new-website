module.exports = {
  siteMetadata: {
    siteUrl: "https://y4shiro.net",
    title: "website",
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-76076401-1",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
