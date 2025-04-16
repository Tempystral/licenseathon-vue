import { defineConfig } from 'eslint/config';
import extensionConfig from '../../.eslintrc.extension.mjs';

export default defineConfig({
	extends: [extensionConfig],
});
