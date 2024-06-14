/** @type {import('next').NextConfig} */
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: '@import "./src/styles/index.scss"; \n',
  },
  env: {
    API_DELAY: process.env.API_DELAY,
  },
};

export default nextConfig;
