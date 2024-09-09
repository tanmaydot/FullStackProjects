import HtmlWebpackPlugin from "html-webpack-plugin";

const port = process.env.PORT || 3001;

export const mode = "development";
export const entry = "./src/index.js";
export const output = {
  filename: "bundle.[hash].js",
};
export const devtool = "inline-source-map";
export const module = {
  rules: [
    {
      test: /\.(js)$/,
      exclude: /node_modules/,
      use: ["babel-loader"],
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader",
          options: {
            modules: true,
            localsConvention: "camelCase",
            sourceMap: true,
          },
        },
      ],
    },
  ],
};
export const plugins = [
  new HtmlWebpackPlugin({
    template: "public/index.html",
    favicon: "public/favicon.ico",
  }),
];
export const devServer = {
  host: "localhost",
  port: port,
  historyApiFallback: true,
  open: true,
};
