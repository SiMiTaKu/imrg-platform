import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import globals from 'globals'
import svelte from 'eslint-plugin-svelte'
import unusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'
import svelteConfig from './svelte.config.js'

// oshiage の eslint.config.mjs をもとに、このリポジトリで使っていたルールを引き継ぐ
export default tseslint.config(
  {
    ignores: ['build/**', '.svelte-kit/**', 'node_modules/**', 'coverage/**'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...svelte.configs.recommended,
  {
    plugins: { 'unused-imports': unusedImports },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-namespace': 'off',
      // 日本語の文章に全角スペースを使うので、文字列・テンプレート・コメントでは許す
      'no-irregular-whitespace': [
        'error',
        { skipStrings: true, skipTemplates: true, skipComments: true, skipRegExps: true },
      ],
      'array-callback-return': 'error',
      'no-constructor-return': 'error',
    },
  },
  {
    files: ['**/*.svelte', '**/*.svelte.ts'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        projectService: true,
        extraFileExtensions: ['.svelte'],
        svelteConfig,
      },
    },
    rules: {
      // テンプレートの文章にも全角スペースを使う
      'no-irregular-whitespace': 'off',
      // base パスを使わずルート直下に置くサイトなので、リンクに resolve() を強制しない
      'svelte/no-navigation-without-resolve': 'off',

      'svelte/no-export-load-in-svelte-module-in-kit-pages': 'error',
      'svelte/no-reactive-reassign': 'error',
      'svelte/no-store-async': 'error',
      'svelte/require-store-reactive-access': 'error',
      'svelte/block-lang': ['error', { script: 'ts', style: 'scss' }],
      'svelte/button-has-type': 'error',
      'svelte/no-ignored-unsubscribe': 'error',
      'svelte/no-immutable-reactive-statements': 'error',
      'svelte/no-reactive-functions': 'error',
      'svelte/no-reactive-literals': 'error',
      'svelte/no-unused-class-name': 'error',
      'svelte/no-useless-mustaches': ['error', { ignoreStringEscape: true }],
      'svelte/require-each-key': 'error',
      'svelte/require-event-dispatcher-types': 'error',
      'svelte/require-stores-init': 'error',
      'svelte/valid-each-key': 'error',
      'svelte/derived-has-same-inputs-outputs': 'error',
      'svelte/valid-compile': 'error',

      'svelte/prefer-class-directive': 'error',
      'svelte/prefer-style-directive': 'error',
      'svelte/no-extra-reactive-curlies': 'error',
      'svelte/spaced-html-comment': 'error',
    },
  },
  // 見た目は Prettier に任せる。ぶつかるルールを最後にまとめて切る
  ...svelte.configs.prettier,
  eslintConfigPrettier,
)
