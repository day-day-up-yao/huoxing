/** @type {import('next').NextConfig} */
const withLess = require('next-with-less');
const path = require('node:path');
const dotenv = require('dotenv');

const envConfig = process.env.ENV_CONFIG || 'production';
const envFile = `.env.${envConfig}`;
const envVars = dotenv.config({ path: envFile }).parsed;

module.exports = withLess({
  env: envVars,

  reactStrictMode: true,

  // ---------由于添加withLess最后不起作用，去掉则正常代理----------
  // rewrites: async () => ({
  //   fallback: [
  //     {
  //       source: '/sitemap.txt',
  //       destination: 'https://naga-api.mars-block.com/api/gamefi/sitemap.xml',
  //     },
  //   ],
  // }),

  // typescript: {
  //   // 注意：这会让构建过程忽略所有 TypeScript 错误！
  //   ignoreBuildErrors: true,
  // },

  modularizeImports: {
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
    '@mui/lab': {
      transform: '@mui/lab/{{member}}',
    },
  },

  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.externals.push({
      'utf-8-validate': 'commonjs utf-8-validate',
      bufferutil: 'commonjs bufferutil',
    });

    config.module.rules.forEach((rule) => {
      const { oneOf } = rule;
      if (oneOf) {
        oneOf.forEach((one) => {
          if (!`${one.issuer?.and}`.includes('_app')) return;
          one.issuer.and = [path.resolve(__dirname)];
        });
      }
    });

    // config.module.rules.push({
    //   test: /\.css$/,
    //   use: [
    //     options.defaultLoaders.babel,
    //     {
    //       loader: require.resolve('sass-loader'),
    //     },
    //   ],
    // });

    return config;
  },
});
