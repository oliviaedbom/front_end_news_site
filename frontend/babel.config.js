/* eslint-disable func-names */
module.exports = function (api) {
  api.cache(true);

  const test = /\.m?js$/;
  const exclude = /(node_modules)/;
  const presets = ['@babel/preset-env'];

  const plugins = [
    '@babel/syntax-dynamic-import',
    '@babel/plugin-proposal-object-rest-spread',
    ['@babel/plugin-proposal-class-properties', { spec: true }],
  ];

  // JEST runs in node, and does not have access to all those browser features.
  // so we need to fake a few things here and tell babel how to compile your tests.
  const env = {
    test: {
      plugins: ['dynamic-import-node'],
      presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
    },
  };

  return {
    test,
    exclude,
    presets,
    plugins,
    env,
  };
};
