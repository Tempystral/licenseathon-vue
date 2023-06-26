import vue from '@vitejs/plugin-vue';
import { globbySync } from 'globby';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import NodeCGPlugin from 'vite-plugin-nodecg';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  server: {
    port: 5173,
  },
  plugins: [
    vue({
      template: { transformAssetUrls },
    }),
    checker({ vueTsc: { tsconfigPath: 'tsconfig.browser.json' } }),
    NodeCGPlugin( {
      inputs: { './src/graphics/*.{js,ts}': './src/graphics/template.html',
                './src/dashboard/*.{js,ts}': './src/dashboard/template.html', }
    } ),
  ],
  resolve: {
    
    alias: {
      "@licenseathon-vue": `${__dirname}/src/`,
    }
  },
  build: {
    rollupOptions: {
      input: globbySync([
        './src/graphics/*.ts',
        './src/dashboard/*.ts',
        '!**.d.ts',
      ])
    },
  },
});
