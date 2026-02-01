const path = require('path');

module.exports = {
  entry: './src/index.tsx', // Adjust according to your entry file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      // Sadece bu kuralı kullan, diğer .md kuralını sil:
      {
        test: /\.md$/,
        type: 'asset/source', // Bu ayar içeriği 'string' olarak verir
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Adjust based on the types of files you use
  },
  // Add other Webpack configurations here (like plugins, devServer, etc.)
};
