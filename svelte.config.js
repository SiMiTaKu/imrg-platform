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
      handleHttpError: ({ path, message }) => {
        // ignore deliberate link to shiny 404 page
        if (path.startsWith('/static')) {
          // 静的ファイルの404エラーを無視
          return;
        }
        throw new Error(message);
      }
    },
  },
};

export default config;
