module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_mudles/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}