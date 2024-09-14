// this file is generated — do not edit it

/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 *
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 *
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 *
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 *
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 *
 * You can override `.env` values from the command line like so:
 *
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module "$env/static/private" {
  export const MANPATH: string;
  export const NODENV_SHELL: string;
  export const NODENV_DIR: string;
  export const SHELL: string;
  export const HOMEBREW_REPOSITORY: string;
  export const TMPDIR: string;
  export const _JETBRAINS_VITEST_RUN_SCOPE_TYPE: string;
  export const SBT_HOME: string;
  export const SDKMAN_PLATFORM: string;
  export const NODENV_ROOT: string;
  export const NODENV_HOOK_PATH: string;
  export const USER: string;
  export const MOCHA_COLORS: string;
  export const COMMAND_MODE: string;
  export const SDKMAN_CANDIDATES_API: string;
  export const SSH_AUTH_SOCK: string;
  export const __CF_USER_TEXT_ENCODING: string;
  export const BASH_SILENCE_DEPRECATION_WARNING: string;
  export const PATH: string;
  export const __CFBundleIdentifier: string;
  export const PWD: string;
  export const JAVA_HOME: string;
  export const COURSIER_TTL: string;
  export const SDKMAN_VERSION: string;
  export const XPC_FLAGS: string;
  export const FORCE_COLOR: string;
  export const XPC_SERVICE_NAME: string;
  export const DEBUG_COLORS: string;
  export const SHLVL: string;
  export const PYENV_SHELL: string;
  export const HOME: string;
  export const HOMEBREW_PREFIX: string;
  export const LOGNAME: string;
  export const SDKMAN_DIR: string;
  export const npm_config_color: string;
  export const NODENV_VERSION: string;
  export const FZF_CTRL_T_COMMAND: string;
  export const LC_CTYPE: string;
  export const FZF_DEFAULT_COMMAND: string;
  export const HOMEBREW_CELLAR: string;
  export const SDKMAN_CANDIDATES_DIR: string;
  export const INFOPATH: string;
  export const COLORTERM: string;
  export const TEST: string;
  export const VITEST: string;
  export const NODE_ENV: string;
  export const VIPSHOME: string;
  export const PROD: string;
  export const DEV: string;
  export const BASE_URL: string;
  export const MODE: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 *
 * Values are replaced statically at build time.
 *
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module "$env/static/public" {}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/master/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 *
 * This module cannot be imported into client-side code.
 *
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 *
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module "$env/dynamic/private" {
  export const env: {
    MANPATH: string;
    NODENV_SHELL: string;
    NODENV_DIR: string;
    SHELL: string;
    HOMEBREW_REPOSITORY: string;
    TMPDIR: string;
    _JETBRAINS_VITEST_RUN_SCOPE_TYPE: string;
    SBT_HOME: string;
    SDKMAN_PLATFORM: string;
    NODENV_ROOT: string;
    NODENV_HOOK_PATH: string;
    USER: string;
    MOCHA_COLORS: string;
    COMMAND_MODE: string;
    SDKMAN_CANDIDATES_API: string;
    SSH_AUTH_SOCK: string;
    __CF_USER_TEXT_ENCODING: string;
    BASH_SILENCE_DEPRECATION_WARNING: string;
    PATH: string;
    __CFBundleIdentifier: string;
    PWD: string;
    JAVA_HOME: string;
    COURSIER_TTL: string;
    SDKMAN_VERSION: string;
    XPC_FLAGS: string;
    FORCE_COLOR: string;
    XPC_SERVICE_NAME: string;
    DEBUG_COLORS: string;
    SHLVL: string;
    PYENV_SHELL: string;
    HOME: string;
    HOMEBREW_PREFIX: string;
    LOGNAME: string;
    SDKMAN_DIR: string;
    npm_config_color: string;
    NODENV_VERSION: string;
    FZF_CTRL_T_COMMAND: string;
    LC_CTYPE: string;
    FZF_DEFAULT_COMMAND: string;
    HOMEBREW_CELLAR: string;
    SDKMAN_CANDIDATES_DIR: string;
    INFOPATH: string;
    COLORTERM: string;
    TEST: string;
    VITEST: string;
    NODE_ENV: string;
    VIPSHOME: string;
    PROD: string;
    DEV: string;
    BASE_URL: string;
    MODE: string;
    [key: `PUBLIC_${string}`]: undefined;
    [key: `${string}`]: string | undefined;
  };
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 *
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 *
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module "$env/dynamic/public" {
  export const env: {
    [key: `PUBLIC_${string}`]: string | undefined;
  };
}
