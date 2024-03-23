import type { LayoutServerLoad } from "./$types";

type Output = App.PageData;

export const load = (async ({ locals }) => {
  return { isMobile: locals.isMobile };
}) satisfies LayoutServerLoad<Output>;
