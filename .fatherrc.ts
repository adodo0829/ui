export default {
  esm: 'babel',
  cjs: 'babel',
  extractCSS: true,
  lessInBabelMode: true,
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
};
