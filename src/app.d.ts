// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    interface Locals {
      isMobile: boolean;
    }

    interface PageData {
      isMobile: boolean;
    }
    // interface Error {}
    // interface Platform {}
  }
}

export {};
