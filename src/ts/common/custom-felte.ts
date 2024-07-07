import { createForm } from "felte"
import type { FormConfigWithoutTransformFn } from "@felte/core"
import { writable } from "svelte/store"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Obj = Record<string, any>;

/**
 * felteにsubmittedプラグインを追加したフォームを作成する
 * @param config フォームの設定
 */
export function createCustomForm<T extends Obj>(
  config: FormConfigWithoutTransformFn<T>
) {
  const submitted = writable(false)
  return {
    ...createForm<T>({
      ...config,
      onSuccess: (response, context) => {
        config.onSuccess ? config.onSuccess(response, context) : undefined
        submitted.set(true)
      },
    }),
    submitted,
  }
}
