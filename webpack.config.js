// webpack.config.js
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production", // mode production active les optimisations
  entry: "./scripts/script.js", // Chemin correct vers script.js
  output: {
    filename: "bundle.min.js", // Nom du fichier JavaScript minifié généré
    path: path.resolve(__dirname, "dist"), // Dossier de sortie
    clean: true, // Nettoie le dossier dist avant chaque build
  },
  optimization: {
    minimize: true, // Active la minification
    minimizer: [
      new TerserPlugin(), // Minification JavaScript
      new CssMinimizerPlugin(), // Minification CSS
      new HtmlMinimizerPlugin(), // Minification HTML
    ],
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Gestion des fichiers SCSS
        use: ["style-loader", "css-loader", "sass-loader"], // Loaders pour traiter les fichiers SCSS
      },
      {
        test: /\.css$/, // Gestion des fichiers CSS
        use: ["style-loader", "css-loader"], // Chargeurs pour injecter et lire les fichiers CSS
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|ico)$/i, // Gestion des images et icônes
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]", // Chemin de sortie pour les images
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i, // Gestion des polices
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]", // Chemin de sortie pour les polices
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Chemin correct vers index.html
      minify: false,
    }),
  ],
};
