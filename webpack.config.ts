import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'
import webpack from 'webpack'
import wds from 'webpack-dev-server'
import TerserPlugin from 'terser-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const config: webpack.Configuration = {
  entry: {
    index: { import: './index.entry' },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(m?js|jsx?|tsx?)$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.css$/i,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: 'css-loader' },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV ?? 'production'
      ),
    }),
    new HtmlWebpackPlugin({
      template: 'index.template.html',
      filename: '[name].html', // name 会等同 index.template.html
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    hot: true,
    port: 9000,
  } as wds.Configuration,
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.tsx', '.ts'],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
}

export default config
