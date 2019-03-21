// const babelOptions = {
//   plugins: ['require-context-hook']
// };
//
// module.exports = require('ts-jest').createTransformer({babelConfig: babelOptions});

const babelOptions = {
  plugins: ['require-context-hook']
};

module.exports = require('babel-jest').createTransformer(babelOptions);
