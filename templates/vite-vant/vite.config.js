import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

const { resolve } = require('path');

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [vue()],
    base: process.env.VITE_APP_BASE,
    build: {
      outDir: process.env.VITE_APP_DIR,
    },
    server: {
      port: 8000, // 配置启用的端口号
    },
    resolve: {
      // 设置别名
      alias: {
        '@/views': resolve(__dirname, 'src/views/'),
        '@/styles': resolve(__dirname, 'src/styles/'),
      },
    },
    css: {
      preprocessorOptions: {
        // 引入公用的样式
        scss: {
          additionalData: '@import "@/styles/common.scss";',
        },
      },
    },
  });
};
