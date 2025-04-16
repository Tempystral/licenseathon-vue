import globals from "globals"
import vuePlugin from "eslint-plugin-vue";
import importPlugin from "eslint-plugin-import-x";
import tseslint from "typescript-eslint"
import rootConfig from "./eslint.config.mjs";
import stylistic from "@stylistic/eslint-plugin"
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";

export default tseslint.config(
  tseslint.configs.recommended,
  vuePlugin.configs["flat/essential"],
  importPlugin.flatConfigs.typescript,
  {
    languageOptions: {
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        nodecg: 'readonly',
        NodeCG: 'readonly',
      },
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module"
      }
    },
    plugins: {
      "@stylistic": stylistic
    },
    extends: [rootConfig, importPlugin.flatConfigs.typescript],
    settings: {
      "import-x/resolver-next": [
        createTypeScriptImportResolver({
          tsconfig: "tsconfig.browser.json" 
          
          // extensions: ['.js', '.jsx', '.ts', '.tsx']
        })
      ],
      "import-x/extensions": ['.js', '.jsx', '.ts', '.tsx']
      
    },
    rules: {
      // Everything is compiled for the browser so dev dependencies are fine.
      'import-x/no-extraneous-dependencies': ['error', { devDependencies: true }],
      // max-len set to ignore "import" lines (as they usually get long and messy).
      '@stylistic/max-len': "off", //['error', { code: 100, ignorePattern: '^import\\s.+\\sfrom\\s.+;' }],
      // I mainly have this off as it ruins auto import sorting in VSCode.
      '@stylistic/object-curly-newline': 'off',
      "@stylistic/no-mixed-spaces-and-tabs": "off",
      "@stylistic/no-multiple-empty-lines": "off",
      // Allows "main.vue" files to be named as such.
      'vue/multi-word-component-names': ['error', { 'ignores': ['main'] }],
  
      "no-fallthrough": "off",
      "prefer-const": "error",
      "no-unused-vars": "off"
      
    }
  },
  // ...
);

/* export default defineConfig([
  ...vuePlugin.configs["flat/essential"],
  ...{
  root: true,
  env: {
    node: true,
    browser: true,
    es2021: true,
    // 'vue/setup-compiler-macros': true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: 'tsconfig.browser.json',
    extraFileExtensions: ['.vue'],
  },
  globals: {
    ...globals.browser,
    nodecg: 'readonly',
    NodeCG: 'readonly',
  },
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    airbnb,
    airbnbTS,
    'js/recommended',
    'typescript-eslint/recommended',
    'import/typescript',
  ],
  settings: {
    'import/resolver': {
      typescript: {
        // This is needed to properly resolve paths.
        project: 'tsconfig.browser.json',
      },
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  },
  rules: {
    // Everything is compiled for the browser so dev dependencies are fine.
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // max-len set to ignore "import" lines (as they usually get long and messy).
    'max-len': "off", //['error', { code: 100, ignorePattern: '^import\\s.+\\sfrom\\s.+;' }],
    // I mainly have this off as it ruins auto import sorting in VSCode.
    'object-curly-newline': 'off',
    // Allows "main.vue" files to be named as such.
    'vue/multi-word-component-names': ['error', { 'ignores': ['main'] }],
    // Not sure how much this is needed anymore?
    'import/extensions': ['error', 'ignorePackages', {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],

    "no-fallthrough": "off",
    "prefer-const": "error",
    "no-mixed-spaces-and-tabs": "off",
    "no-unused-vars": "off",
    "no-multiple-empty-lines": "off"
  }
}]);
 */