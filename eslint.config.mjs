import js from '@eslint/js'
import globals from 'globals'
import svelte from 'eslint-plugin-svelte'
import unusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'
import svelteConfig from './svelte.config.js'

// oshiage の eslint.config.mjs をもとに、このリポジトリで使っていたルールを引き継ぐ
export default tseslint.config(
  {
    ignores: [ 'build/**', '.svelte-kit/**', 'node_modules/**', 'coverage/**' ],
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
    // 見た目のルール。以前と同じく src だけに効かせる。1-5b で Prettier に置き換える
    files: [ 'src/**/*.{ts,svelte}' ],
    rules: {
      'comma-dangle': [
        'error',
        {
          arrays: 'only-multiline',
          objects: 'only-multiline',
          imports: 'only-multiline',
          exports: 'only-multiline',
          functions: 'never',
        },
      ],
      'object-curly-newline': [ 'error', { multiline: true } ],
      'object-curly-spacing': [ 'error', 'always' ],
      'array-element-newline': [ 'error', { multiline: true, minItems: 4 } ],
      'array-bracket-spacing': [ 'error', 'always' ],
      semi: [ 'error', 'never' ],
    },
  },
  {
    files: [ '**/*.svelte', '**/*.svelte.ts' ],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        projectService: true,
        extraFileExtensions: [ '.svelte' ],
        svelteConfig,
      },
    },
    rules: {
      // テンプレートの文章にも全角スペースを使う
      'no-irregular-whitespace': 'off',
      // base パスを使わずルート直下に置くサイトなので、リンクに resolve() を強制しない
      'svelte/no-navigation-without-resolve': 'off',

      // 動作に関わるルール
      'svelte/no-export-load-in-svelte-module-in-kit-pages': 'error',
      'svelte/no-reactive-reassign': 'error',
      'svelte/no-store-async': 'error',
      'svelte/require-store-reactive-access': 'error',
      'svelte/block-lang': [ 'error', { script: 'ts', style: 'scss' } ],
      'svelte/button-has-type': 'error',
      'svelte/no-ignored-unsubscribe': 'error',
      'svelte/no-immutable-reactive-statements': 'error',
      'svelte/no-reactive-functions': 'error',
      'svelte/no-reactive-literals': 'error',
      'svelte/no-unused-class-name': 'error',
      'svelte/no-useless-mustaches': [ 'error', { ignoreStringEscape: true } ],
      'svelte/require-each-key': 'error',
      'svelte/require-event-dispatcher-types': 'error',
      'svelte/require-stores-init': 'error',
      'svelte/valid-each-key': 'error',
      'svelte/derived-has-same-inputs-outputs': 'error',
      'svelte/valid-compile': 'error',

      // 見た目のルール
      'svelte/html-closing-bracket-spacing': 'error',
      'svelte/html-quotes': [ 'error', { prefer: 'single' } ],
      'svelte/html-self-closing': [
        'error',
        {
          void: 'always',
          normal: 'never',
          svg: 'always',
          math: 'never',
          component: 'always',
          svelte: 'always',
        },
      ],
      'svelte/indent': [
        'error',
        {
          indent: 2,
          ignoredNodes: [],
          switchCase: 1,
          alignAttributesVertically: true,
        },
      ],
      'svelte/max-attributes-per-line': [ 'error', { multiline: 1, singleline: 2 } ],
      'svelte/mustache-spacing': 'error',
      'svelte/no-extra-reactive-curlies': 'error',
      'svelte/no-spaces-around-equal-signs-in-attribute': 'error',
      'svelte/prefer-class-directive': 'error',
      'svelte/prefer-style-directive': 'error',
      'svelte/shorthand-attribute': 'error',
      'svelte/sort-attributes': [
        'error',
        {
          order: [
            'bind',
            'id',
            'class',
            'style',
            'name',
            'slot',
            'type',
            'value',
            'width',
            'height',
            'src',
            'alt',
            'title',
            'on:*',
          ],
        },
      ],
      'svelte/spaced-html-comment': 'error',
      'svelte/no-trailing-spaces': 'error',
    },
  },
)
