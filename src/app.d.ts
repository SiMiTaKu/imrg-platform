// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

declare global {
  namespace App {
    interface Locals {
      isMobile: boolean;
    }

    // interface PageData {}
    // interface Error {}
    // interface Platform {}
  }

  /**
   * vite image-tools の型定義
   * import の path の末尾に &as=meta を付与することで image 型として import 可能
   * @see https://github.com/JonasKruckenberg/imagetools/issues/160#issuecomment-1633763778
   */
  declare module "*&as=meta" {
    const images: {
      src: string;
      width: number;
      height: number;
      format: string;
    }[]
    export default images
  }
}

export {}
