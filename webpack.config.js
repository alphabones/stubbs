// Includes
// --------------------
const path = require("path");
const webpack = require("webpack");

// Plugin/Option Includes
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// Configuration
// --------------------
const projectRoot = path.resolve(__dirname, ".");
// Project name
const projectName = "my-company";

// Filename is always hashed, but can be branched here if need
const baseFileName = "[name]";
process.traceDeprecation = true;

// Plugins
// --------------------
// Decalred before rules so they can be used inside rules
const plugins = [];

const extractSass = new ExtractTextPlugin({
  filename: baseFileName + ".css",
  disable: false
});

plugins.push(extractSass);

// Rules
// --------------------
const rules = [];
const ruleScss = {
  test: /\.scss$/,
  use: extractSass.extract({
    use: [
      {
        loader: "css-loader"
      },
      {
        loader: "sass-loader"
      }
    ],
    // use style-loader in development
    fallback: "style-loader"
  })
};

rules.push(ruleScss);

// Output
// ---------------------
module.exports = {
  entry: {
    ['main']: [
      path.resolve(projectRoot, `themes/dimension/static/manifest.js`)
    ]
  },
  // Depnding on process.env, this should be either a hash or a name
  output: {
    path: path.resolve(projectRoot, "themes/dimension/static/css"),
    filename: baseFileName + ".js"
  },
  module: { rules },
  plugins
};
