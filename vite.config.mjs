import { default as vue } from '@vitejs/plugin-vue';
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
    vue(),
    checker({ vueTsc: { tsconfigPath: 'tsconfig.browser.json' } }),
    NodeCGPlugin( {
      srcDir: "./src",
      inputs: { 'graphics/*.{js,ts}': './src/graphics/template.html',
                'dashboard/*.{js,ts}': './src/dashboard/template.html', }
    } ),
  ],
  optimizeDeps: {
    include: ["~/git/nodecg-vue-composable"]
  },
  resolve: {
    //preserveSymlinks: true,
    alias: {
      "@licenseathon-vue": `${__dirname}/src/`,
    }
  },
  
});
