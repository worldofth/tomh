import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'
import { defineConfig } from 'eslint/config'
import eslintPluginAtro from 'eslint-plugin-astro'

export default defineConfig([
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], plugins: { js }, extends: ['js/recommended'] },
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'], languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    { files: ['**/*.astro'], plugins: eslintPluginAtro.configs.recommended },
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended
])
