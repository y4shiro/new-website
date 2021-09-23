module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      staticDistDir: './public',
      url: ['/'],
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://rocky-caverns-87987.herokuapp.com',
      token: '12a30950-2c0c-475f-98aa-519cf2266258',
    },
  },
};
