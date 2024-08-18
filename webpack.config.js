// webpack.config.js
const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production", // Active les optimisations pour la production
  entry: "./scripts/script.js", // Chemin vers le fichier d'entrée principal
  output: {
    filename: "bundle.min.js", // Nom du fichier JS minifié généré
    path: path.resolve(__dirname, "dist"), // Dossier de sortie
    publicPath: "", // Indique que les chemins sont relatifs à la racine du projet
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
        test: /\.scss$/, // Pour les fichiers SCSS
        use: ["style-loader", "css-loader", "sass-loader"], // Loaders pour traiter SCSS -> CSS
      },
      {
        test: /\.css$/, // Pour les fichiers CSS
        use: ["style-loader", "css-loader"], // Chargeurs pour injecter et lire les fichiers CSS
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|webp|ico)$/i, // Pour les images et icônes
        type: "asset/resource",
        generator: {
          filename: "assets/images/[name][ext]", // Chemin de sortie pour les images
        },
      },
      {
        test: /\.(woff|ttf)$/i, // Pour les polices
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]", // Chemin de sortie pour les polices
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html", // Chemin vers le modèle HTML de base
      filename: "index.html", // Nom du fichier HTML généré
      minify: false, // Désactive la minification pour le HTML
    }),
  ],
};
