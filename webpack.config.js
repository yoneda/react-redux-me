
module.exports = {
  entry: "./src/index.js", // 出力元
  output:{
    path: `${__dirname}/public`, // 出力先
    filename: "main.js",
  },
  mode: "development",
  /* mode: "production", */
  devServer:{
    contentBase: "./public",
    port: "3000"
  },
  module:{
    rules:[
      {
        test: /\.css$/,
        loaders: ["style-loader","css-loader?modules"],
      },
      {
        test:/\.js/,
        exclude:/node_modules/,
        use:["babel-loader"]
      },
      {
        test:/\.svg$/,
        loader: "svg-inline-loader",
      },
    ]
  },
};
