const isYif = process.env.YIF_ENV == 'production' || process.env.YIF_ENV == 'development';

const publicPathConfig = isYif
  ? [process.env.YIF_PUCLIC_HOST, process.env.YIF_PROJECT_PATH, process.env.YIF_PROJECT_VERSION]
  : [];

const publicPath = publicPathConfig.join('/') + '/';

// ref: https://umijs.org/config/
export default {
  base: '/',
  publicPath,
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        title: 'App',
        dll: true,

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
};
