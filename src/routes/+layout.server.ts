import type { LayoutServerLoad } from "./$types";

type Output = App.PageData;

export const load = (async ({ locals }) => {
  /** @desc 現在amplifyでhooksが動作していない */
  return { isMobile: locals.isMobile };
}) satisfies LayoutServerLoad<Output>;
