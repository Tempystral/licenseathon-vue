import { quasar, transformAssetUrls } from '@quasar/vite-plugin';
import vue from '@vitejs/plugin-vue';
import { globbySync } from 'globby';
import path from 'path';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import NodeCGPlugin from 'vite-plugin-nodecg';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    quasar({
      autoImportComponentCase: 'pascal',
    }),
    checker({ vueTsc: { tsconfigPath: 'tsconfig.browser.json' } }),
    NodeCGPlugin(),
  ],
  resolve: {
    
    alias: {
      "@": path.resolve(path.dirname("./"), "src")
    }
  },
  build: {
    rollupOptions: {
      input: globbySync([
        './src/dashboard/*.ts',
        './src/graphics/*.ts',
        '!**.d.ts',
      ])
    },
  },
});
