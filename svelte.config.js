import adapter            from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type.ts {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: 'index.html',
      precompress: false,
      strict: true,
    }),
    files: {
      hooks: {
        server: 'src/lib/hooks/hooks.server',
      }
    },
    prerender: {
      handleHttpError: ({ path, referrer, message }) => {
        // ignore deliberate link to shiny 404 page
        if (path.startsWith('/static')) {
          // 静的ファイルの404エラーを無視
          return;
        }
        throw new Error(message);
      }
    },
    paths: {
      assets: `https://${process.env.PUBLIC_BASE_PATH}/`,
      base: `/${process.env.PUBLIC_BASE_PATH}`
    }
  },
};

export default config;
