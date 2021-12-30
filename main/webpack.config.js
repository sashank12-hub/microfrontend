const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 3000,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "Main",
      remotes: {
        container: "container@http://localhost:8080/remoteEntry.js",
      },
    }),
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
};
