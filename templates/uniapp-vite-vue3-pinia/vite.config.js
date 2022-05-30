/* eslint-disable import/no-unresolved */
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    uni(),
    AutoImport({
      imports: [
        'vue', 'pinia',
      ],
      dts: './auto-import.d.ts',
      eslintrc: {
        enabled: true,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
    }),
  ],
  build: {
    sourcemap: true,
  },
});
