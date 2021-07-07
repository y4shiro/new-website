module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "website",
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "",
      },
    },
    "gatsby-plugin-react-helmet",
  ],
};
