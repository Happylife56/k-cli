/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const { resolve } = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8000, // 配置启用的端口号
    proxy: {
      '/api': {
        // target: 'http://192.168.10.173:8080',
        changeOrigin: true,
      },
    },
  },
  resolve: {
    // 设置别名
    alias: {
      '@/views': resolve(__dirname, 'src/views/'),
      '@/styles': resolve(__dirname, 'src/styles/'),
      '@/utils': resolve(__dirname, 'src/utils/'),
      '@/store': resolve(__dirname, 'src/store/'),
      '@/api': resolve(__dirname, 'src/api/'),
      '@/components': resolve(__dirname, 'src/components/'),
      '@/assets': resolve(__dirname, 'src/assets/'),
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
