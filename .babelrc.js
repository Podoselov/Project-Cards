export default (function (api) {
  api.cache.never();
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          debug: true,
          modules: false,
        },
      ],
    ],
  };
})();
