const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const DotEnvPlugin = require('dotenv-webpack');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src/index.ts'),
    path.resolve(__dirname, 'src/assets/scss/index.scss')
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Front-end Development Boilerplate',
      template: path.resolve(__dirname, 'src/index.html'),
      filename: 'index.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Grid System',
      template: path.resolve(__dirname, 'src/grid-system.html'),
      filename: 'grid-system.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Design System',
      template: path.resolve(__dirname, 'src/design-system.html'),
      filename: 'design-system.html'
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, 'src/partials/header.html'),
      location: 'header',
      template_filename: ['index.html', 'grid-system.html', 'design-system.html']
    }),
    new HtmlWebpackPartialsPlugin({
      path: path.join(__dirname, 'src/partials/footer.html'),
      location: 'footer',
      template_filename: ['index.html', 'grid-system.html', 'design-system.html']
    }),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash].css'
    }),
    new DotEnvPlugin({
      systemvars: true
    })
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.ts', '.js', '.json']
  }
};
