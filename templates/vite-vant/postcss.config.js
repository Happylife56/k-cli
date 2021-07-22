module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      selectorBlackList: ['van'],
      propList: ['*'],
    },
  },
};
