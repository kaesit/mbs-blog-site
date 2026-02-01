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
        test: /\.tsx?$/, // TypeScript rule
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.md$/, // Rule for .md files
        use: 'raw-loader', // Use raw-loader to import markdown as text
      },
      {
        test: /\.css$/, // CSS rule (example)
        use: ['style-loader', 'css-loader'],
      },
      // Add other rules for your project as needed
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // Adjust based on the types of files you use
  },
  // Add other Webpack configurations here (like plugins, devServer, etc.)
};
