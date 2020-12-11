const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = [
  {
    entry: './app1/index',
    mode: 'development',
    devtool: false,
    output: {
      publicPath: 'http://localhost:3000/',
      path: path.join(__dirname, 'dist/app1')
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-react']
          }
        },
        {
          test: /\.css/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.svg/,
          loader: 'file-loader'
        }
      ]
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'app1',
        library: { type: 'var', name: 'app1' },
        filename: 'remoteEntry.js',
        remotes: {
          'app2': 'app2'
        },
        exposes: {
          './App': './app1/App.js'
        },
        shared: {
          'react': {
            eager: true
          },
          'react-dom': {
            eager: true
          }
        }
      }),
      new HtmlWebpackPlugin({
        template: './app1/index.html'
      })
    ]
  },
  {
    entry: './app2/index',
    mode: 'development',
    devtool: false,
    output: {
      publicPath: 'http://localhost:3001/',
      path: path.join(__dirname, 'dist/app2')
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: ['@babel/preset-react']
          }
        },
        {
          test: /\.css/,
          use: ["style-loader", "css-loader"]
        },
        {
          test: /\.svg/,
          loader: 'file-loader'
        }
      ]
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'app2',
        library: { type: 'var', name: 'app2' },
        filename: 'remoteEntry.js',
        remotes: {
          'app1': 'app1'
        },
        exposes: {
          './RollingReact': './app2/RollingReact.js'
        },
        shared: {
          'react': {
            eager: true
          },
          'react-dom': {
            eager: true
          }
        }
      }),
      new HtmlWebpackPlugin({
        template: './app2/index.html'
      })
    ]
  }
];
