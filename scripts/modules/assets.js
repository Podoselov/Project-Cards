import HtmlWebpackPlugin from 'html-webpack-plugin';

export const setupHtml = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
});

export const loadFonts = () => ({
  module: {
    rules: [
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
});

export const loadSvg = () => ({
  module: {
    rules: [
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        issuer: {
          test: /\.css$/,
        },
        use: [
          {
            loader: 'file-loader',
            options: {
              name: './images/[name].[ext]',
            },
          },
        ],
      },
    ],
  },
});
