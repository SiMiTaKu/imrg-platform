import type { Handle } from "@sveltejs/kit";

/** @desc 現在amplifyでhooksが動作していない */
export const handle: Handle = async ({ event, resolve }) => {
  event.locals.isMobile = isMobile(event.request.headers as Headers);
  return await resolve(event);
};

function isMobile(headers: Headers) {
  return (
    !!headers.get("user-agent")?.match(/iPhone|Android.+Mobile/) ||
    headers.get("src-ch-ua-mobile") == "?1"
  );
}
