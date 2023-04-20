import { join, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  entry: {
    backgroundPage: join(__dirname, 'src/backgroundPage.ts'),
    popup: join(__dirname, 'src/popup.tsx'),
    sessions: join(__dirname, 'src/sessions.tsx'),
  },
  output: {
    path: join(__dirname, 'dist/js'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'ts-loader',
      },
      // Treat src/css/app.css as a global stylesheet
      {
        test: /\app.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  // Setup @src path resolution for TypeScript files
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@src': resolve(__dirname, 'src/'),
    },
  },
};
