module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    'react-hot-loader/babel',
    '@babel/plugin-proposal-optional-chaining',
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    '@babel/plugin-transform-regenerator',
  ],
  env: {
    test: {
      plugins: [
        'react-hot-loader/babel',
        '@babel/plugin-proposal-optional-chaining',
        [
          '@babel/plugin-proposal-decorators',
          {
            legacy: true,
          },
        ],
        [
          '@babel/plugin-proposal-class-properties',
          {
            loose: true,
          },
        ],
        '@babel/plugin-transform-regenerator',
      ],
    },
  },
};
