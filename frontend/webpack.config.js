const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const glob = require('glob');
const {presets} = require(path.resolve(__dirname, 'babel.config.js'))


const components = glob.sync(path.resolve(__dirname, 'components/**/'))
const screens = glob.sync(path.resolve(__dirname, 'screens/**/'))
const redux = glob.sync(path.resolve(__dirname, 'redux/**/'))

const compileNodeModules = [
  "@babel/core",
  "@babel/preset-env",
  "@babel/runtime",
  "@react-native/eslint-config",
  "@react-native/metro-config",
  "@react-navigation/native",
  "@react-navigation/stack",
  "@reduxjs/toolkit",
  "@svgr/webpack",
  "@testing-library/react",
  "@testing-library/react-native",
  "@tsconfig/react-native",
  "@types/jest",
  "@types/react",
  "@types/react-test-renderer",
  "autoprefixer",
  "axios",
  "babel-jest",
  "babel-loader",
  "babel-plugin-react-native-web",
  "eslint",
  "glob",
  "html-webpack-plugin",
  "jest",
  "metro-config",
  "metro-react-native-babel-preset",
  "nativewind",
  "postcss",
  "postcss-flexbugs-fixes",
  "postcss-normalize",
  "postcss-preset-env",
  "prettier",
  "react",
  "react-dom",
  "react-native",
  "react-native-gesture-handler",
  "react-native-localize",
  "react-native-macos",
  "react-native-reanimated",
  "react-native-safe-area-context",
  "react-native-screens",
  "react-native-vector-icons",
  "react-native-web",
  "react-native-windows",
  "react-redux",
  "react-test-renderer",
  "redux",
  "tailwindcss",
  "typescript",
  "url-loader",
  "webpack",
  "webpack-cli",
  "webpack-dev-server",
  "ts-loader"
].map((moduleName) => path.resolve(__dirname, `node_modules/${moduleName}`))

const babelLoaderConfiguration = {
  test: /\.(js|jsx)$/,
  include: [
    path.resolve(__dirname, 'index.js'), 
    path.resolve(__dirname, 'App.tsx'), 
    ...components,
    ...screens,
    ...redux,
    ...compileNodeModules
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      presets,
      plugins: ['react-native-web']
    }
  }
}

const svgLoaderConfiguration = {
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack'
    }
  ]
}

const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]'
    }
  }
}

const tsLoaderConfiguration = {
  test: /\.tsx?$/,
  use: 'ts-loader',
  exclude: /node_modules/
}

module.exports = {
    entry: {
        app: path.join(__dirname, 'index.js')
    },
    output: {
        path: path.resolve(__dirname, 'build/web'),
        publicPath: '/',
        filename: 'rnw_blogpost.bundle.js'
    },
    resolve: {
        extensions: ['.web.tsx', '.web.ts', '.tsx', '.ts', '.web.js', '.js'],
        alias: {
            'react-native$': 'react-native-web'
        }
    },
    module: {
        rules: [
            babelLoaderConfiguration,
            imageLoaderConfiguration,
            svgLoaderConfiguration,
            tsLoaderConfiguration
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'web/index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            __DEV__: JSON.stringify(true)
        })
    ]
}
