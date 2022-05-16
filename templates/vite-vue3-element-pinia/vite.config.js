/* eslint-disable import/no-unresolved */
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
// 自动引入 https://juejin.cn/post/7050668133404639268
import AutoImport from 'unplugin-auto-import/vite';

const { resolve } = require('path');

export default ({ mode }) => {
  // 详情 https://juejin.cn/post/6994310850290909214
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    plugins: [
      vue(),
      AutoImport({
        imports: [
          'vue', 'vue-router', 'pinia',
        ],
        eslintrc: {
          enabled: true,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true,
        },
      }),
    ],
    base: process.env.VITE_APP_BASE,
    build: {
      outDir: process.env.VITE_APP_DIR,
      chunkSizeWarningLimit: 1500,
    },
    server: {
      open: true,
      port: 8088, // 配置启用的端口号
      proxy: {
        '/api': {
          // target: 'http://xxxx.com.cn', // 测试
          changeOrigin: true,
        },
      },
    },
    resolve: {
      // 设置别名
      alias: {
        '@': resolve(__dirname, 'src/'),
      },
    },
    css: {
      preprocessorOptions: {
        // 引入公用的样式
        scss: {
          additionalData: '@import "@/styles/common.scss";',
        },
      },
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove();
                }
              },
            },
          },
        ],
      },
    },
  });
};
