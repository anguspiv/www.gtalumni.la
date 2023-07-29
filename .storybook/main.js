const path = require('path');
const toPath = (_path) => path.join(process.cwd(), _path);
module.exports = {
  stories: [
    // '../stories/**/*.stories.mdx',
    // '../stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {},
    },
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  webpackFinal: async (config) => {
    const { mode: environment, plugins, module } = config;

    config.module.rules.push();

    return {
      ...config,
      module: {
        ...module,
        rules: [
          ...module.rules,
          {
            test: /\.jsx?$/,
            use: [
              {
                loader: require.resolve('babel-loader'),
                options: {
                  plugins: ['@emotion/babel-plugin'],
                  presets: ['@emotion/babel-preset-css-prop'],
                },
              },
            ],
          },
        ],
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@components': toPath('src/components'),
          '@styles': toPath('src/styles'),
          '@utils': toPath('src/utils'),
          '@pages': toPath('src/pages'),
          '@hooks': toPath('src/hooks'),
          '@public': toPath('public'),
          '@lib': toPath('src/lib'),
        },
      },
    };
  },
  docs: {
    autodocs: true,
  },
};
