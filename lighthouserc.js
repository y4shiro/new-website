module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      staticDistDir: './public',
      url: ['/'],
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
