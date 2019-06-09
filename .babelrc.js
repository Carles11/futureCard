const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = {
  presets: [
    ['@babel/preset-env', { modules: isTest ? 'commonjs' : false }],
    '@babel/preset-react',
  ],
  plugins: [
    'dynamic-import-webpack',
    '@babel/plugin-proposal-class-properties',
    isTest ? 'dynamic-import-node' : null,
  ].filter(Boolean),
  comments: true,
};
