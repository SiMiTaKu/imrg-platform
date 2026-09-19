// oshiage の eslint.config.mjs と同じ構成。このリポジトリ固有の設定はコメントを付けて足している
import js from '@eslint/js'
import globals from 'globals'
import eslintConfigPrettier from 'eslint-config-prettier'
import jsdoc from 'eslint-plugin-jsdoc'
import svelte from 'eslint-plugin-svelte'
import tsdoc from 'eslint-plugin-tsdoc'
import unusedImports from 'eslint-plugin-unused-imports'
import tseslint from 'typescript-eslint'
import svelteConfig from './web/svelte.config.js'

const EXPORTED_DOC_CONTEXTS = [
  'ExportNamedDeclaration > FunctionDeclaration',
  'ExportDefaultDeclaration > FunctionDeclaration',
  'ExportNamedDeclaration > VariableDeclaration > VariableDeclarator > ArrowFunctionExpression',
  'ExportDefaultDeclaration > ArrowFunctionExpression',
  'ExportNamedDeclaration > ClassDeclaration',
  'ExportDefaultDeclaration > ClassDeclaration',
  'ExportNamedDeclaration > TSInterfaceDeclaration',
  'ExportNamedDeclaration > TSTypeAliasDeclaration',
]

const EXPORTED_FUNCTION_CONTEXTS = [
  'ExportNamedDeclaration > FunctionDeclaration',
  'ExportDefaultDeclaration > FunctionDeclaration',
  'ExportNamedDeclaration > VariableDeclaration > VariableDeclarator > ArrowFunctionExpression',
  'ExportDefaultDeclaration > ArrowFunctionExpression',
]

export default [
  {
    ignores: [
      '**/build/**',
      '**/.svelte-kit/**',
      '**/coverage/**',
      '**/node_modules/**',
      '**/storybook-static/**',
      // Paraglide JS が生成するファイル
      'web/src/lib/paraglide/**',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...svelte.configs['flat/recommended'],
  {
    plugins: {
      'unused-imports': unusedImports,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: {
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'no-restricted-globals': [
        'error',
        {
          name: 'parseInt',
          message: 'Use Number.parseInt instead of global parseInt.',
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      // 日本語の文章に全角スペースを使うので、文字列・テンプレート・コメントでは許す
      'no-irregular-whitespace': [
        'error',
        { skipStrings: true, skipTemplates: true, skipComments: true, skipRegExps: true },
      ],
      // oshiage に無く、このリポジトリで以前から使っていたルール
      'array-callback-return': 'error',
      'no-constructor-return': 'error',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
    },
  },
  {
    files: ['**/*.{ts,tsx,js,jsx,mts,cts,mjs,cjs}'],
    ignores: ['**/*.stories.*', '**/*.spec.*', '**/tests/**', '**/+*.ts', '**/+*.js'],
    plugins: {
      jsdoc,
      tsdoc,
      'unused-imports': unusedImports,
    },
    settings: {
      jsdoc: {
        mode: 'typescript',
      },
    },
    rules: {
      'tsdoc/syntax': 'error',
      'jsdoc/require-jsdoc': [
        'error',
        {
          contexts: EXPORTED_DOC_CONTEXTS,
          require: {
            FunctionDeclaration: true,
            ClassDeclaration: true,
            MethodDefinition: false,
            ArrowFunctionExpression: true,
            FunctionExpression: false,
          },
        },
      ],
      'jsdoc/require-param': [
        'error',
        {
          contexts: EXPORTED_FUNCTION_CONTEXTS,
        },
      ],
      'jsdoc/require-returns': [
        'error',
        {
          contexts: EXPORTED_FUNCTION_CONTEXTS,
        },
      ],
    },
  },
  {
    files: ['**/*.svelte'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        svelteConfig,
      },
    },
    rules: {
      // テンプレートの文章にも全角スペースを使う
      'no-irregular-whitespace': 'off',
      // base パスを使わずルート直下に置くサイトなので、リンクに resolve() を強制しない
      'svelte/no-navigation-without-resolve': 'off',
      // Svelte コンパイラ警告（未使用 CSS セレクタ等）をエラーに昇格
      'svelte/valid-compile': 'error',
      // テンプレートで使用しているが <style> に定義がないクラス名をエラー
      // ※ SCSS の &--modifier ネスト is リント時未コンパイルのため BEM モディファイア（-- を含むクラス）は除外
      'svelte/no-unused-class-name': ['error', { allowedClassNames: ['/^.*--.*$/'] }],
      // {#each} ブロックにキーがない場合はエラー
      'svelte/require-each-key': 'error',
      // ここから下は oshiage に無く、このリポジトリで以前から使っていたルール
      'svelte/valid-each-key': 'error',
      'svelte/no-export-load-in-svelte-module-in-kit-pages': 'error',
      'svelte/no-reactive-reassign': 'error',
      'svelte/no-store-async': 'error',
      'svelte/require-store-reactive-access': 'error',
      'svelte/require-stores-init': 'error',
      'svelte/require-event-dispatcher-types': 'error',
      'svelte/derived-has-same-inputs-outputs': 'error',
      'svelte/no-ignored-unsubscribe': 'error',
      'svelte/no-immutable-reactive-statements': 'error',
      'svelte/no-reactive-functions': 'error',
      'svelte/no-reactive-literals': 'error',
      'svelte/no-useless-mustaches': ['error', { ignoreStringEscape: true }],
      'svelte/block-lang': ['error', { script: 'ts', style: 'scss' }],
      'svelte/button-has-type': 'error',
      'svelte/prefer-class-directive': 'error',
      'svelte/prefer-style-directive': 'error',
      'svelte/no-extra-reactive-curlies': 'error',
      'svelte/spaced-html-comment': 'error',
      // 1行あたりの最大属性数を3に制限
      'svelte/max-attributes-per-line': [
        'error',
        {
          multiline: 1,
          singleline: 3,
        },
      ],
    },
  },
  ...svelte.configs.prettier,
  eslintConfigPrettier,
]
