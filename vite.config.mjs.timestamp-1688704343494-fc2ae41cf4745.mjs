// vite.config.mjs
import { default as vue } from "file:///home/azurite/git/licenseathon-vue/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import { globbySync } from "file:///home/azurite/git/licenseathon-vue/node_modules/globby/index.js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { defineConfig } from "file:///home/azurite/git/licenseathon-vue/node_modules/vite/dist/node/index.js";
import checker from "file:///home/azurite/git/licenseathon-vue/node_modules/vite-plugin-checker/dist/esm/main.js";
import NodeCGPlugin from "file:///home/azurite/git/licenseathon-vue/node_modules/vite-plugin-nodecg/dist/index.js";
var __vite_injected_original_import_meta_url = "file:///home/azurite/git/licenseathon-vue/vite.config.mjs";
var __filename = fileURLToPath(__vite_injected_original_import_meta_url);
var __dirname = dirname(__filename);
var vite_config_default = defineConfig({
  server: {
    port: 5173
  },
  plugins: [
    vue(),
    checker({ vueTsc: { tsconfigPath: "tsconfig.browser.json" } }),
    NodeCGPlugin({
      inputs: {
        "./src/graphics/*.{js,ts}": "./src/graphics/template.html",
        "./src/dashboard/*.{js,ts}": "./src/dashboard/template.html"
      }
    })
  ],
  resolve: {
    alias: {
      "@licenseathon-vue": `${__dirname}/src/`
    }
  },
  build: {
    rollupOptions: {
      input: globbySync([
        "./src/graphics/*.ts",
        "./src/dashboard/*.ts",
        "!**.d.ts"
      ])
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcubWpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL2hvbWUvYXp1cml0ZS9naXQvbGljZW5zZWF0aG9uLXZ1ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvYXp1cml0ZS9naXQvbGljZW5zZWF0aG9uLXZ1ZS92aXRlLmNvbmZpZy5tanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvYXp1cml0ZS9naXQvbGljZW5zZWF0aG9uLXZ1ZS92aXRlLmNvbmZpZy5tanNcIjtpbXBvcnQgeyBkZWZhdWx0IGFzIHZ1ZSB9IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSc7XG5pbXBvcnQgeyBnbG9iYnlTeW5jIH0gZnJvbSAnZ2xvYmJ5JztcbmltcG9ydCB7IGRpcm5hbWUgfSBmcm9tICdwYXRoJztcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgY2hlY2tlciBmcm9tICd2aXRlLXBsdWdpbi1jaGVja2VyJztcbmltcG9ydCBOb2RlQ0dQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tbm9kZWNnJztcblxuY29uc3QgX19maWxlbmFtZSA9IGZpbGVVUkxUb1BhdGgoaW1wb3J0Lm1ldGEudXJsKTtcbmNvbnN0IF9fZGlybmFtZSA9IGRpcm5hbWUoX19maWxlbmFtZSk7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDUxNzMsXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICBjaGVja2VyKHsgdnVlVHNjOiB7IHRzY29uZmlnUGF0aDogJ3RzY29uZmlnLmJyb3dzZXIuanNvbicgfSB9KSxcbiAgICBOb2RlQ0dQbHVnaW4oIHtcbiAgICAgIGlucHV0czogeyAnLi9zcmMvZ3JhcGhpY3MvKi57anMsdHN9JzogJy4vc3JjL2dyYXBoaWNzL3RlbXBsYXRlLmh0bWwnLFxuICAgICAgICAgICAgICAgICcuL3NyYy9kYXNoYm9hcmQvKi57anMsdHN9JzogJy4vc3JjL2Rhc2hib2FyZC90ZW1wbGF0ZS5odG1sJywgfVxuICAgIH0gKSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIFxuICAgIGFsaWFzOiB7XG4gICAgICBcIkBsaWNlbnNlYXRob24tdnVlXCI6IGAke19fZGlybmFtZX0vc3JjL2AsXG4gICAgfVxuICB9LFxuICBidWlsZDoge1xuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIGlucHV0OiBnbG9iYnlTeW5jKFtcbiAgICAgICAgJy4vc3JjL2dyYXBoaWNzLyoudHMnLFxuICAgICAgICAnLi9zcmMvZGFzaGJvYXJkLyoudHMnLFxuICAgICAgICAnISoqLmQudHMnLFxuICAgICAgXSlcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBSLFNBQVMsV0FBVyxXQUFXO0FBQ3pULFNBQVMsa0JBQWtCO0FBQzNCLFNBQVMsZUFBZTtBQUN4QixTQUFTLHFCQUFxQjtBQUM5QixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLGFBQWE7QUFDcEIsT0FBTyxrQkFBa0I7QUFOb0osSUFBTSwyQ0FBMkM7QUFROU4sSUFBTSxhQUFhLGNBQWMsd0NBQWU7QUFDaEQsSUFBTSxZQUFZLFFBQVEsVUFBVTtBQUVwQyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osUUFBUSxFQUFFLFFBQVEsRUFBRSxjQUFjLHdCQUF3QixFQUFFLENBQUM7QUFBQSxJQUM3RCxhQUFjO0FBQUEsTUFDWixRQUFRO0FBQUEsUUFBRSw0QkFBNEI7QUFBQSxRQUM1Qiw2QkFBNkI7QUFBQSxNQUFpQztBQUFBLElBQzFFLENBQUU7QUFBQSxFQUNKO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFFUCxPQUFPO0FBQUEsTUFDTCxxQkFBcUIsR0FBRztBQUFBLElBQzFCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsT0FBTyxXQUFXO0FBQUEsUUFDaEI7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
