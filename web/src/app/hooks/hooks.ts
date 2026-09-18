import type { Reroute } from '@sveltejs/kit'
import { deLocalizeUrl } from '$lib/paraglide/runtime'

/**
 * 言語の接頭辞（/en/ など）を外したパスで、ルートを探す
 * @param input - SvelteKit から渡される引数（url: リクエストの URL）
 * @returns 接頭辞を外したパス
 */
export const reroute: Reroute = (input) => deLocalizeUrl(input.url).pathname
