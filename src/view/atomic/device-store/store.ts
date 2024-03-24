import {
  designOfSP,
  getResponsiveDesign,
} from "../../../ts/common/responsive-design";
import { writable } from "svelte/store";

type PageData = {
  isMobile: boolean;
};

function createStore() {
  const defaultPageData: PageData = { isMobile: false };

  const { subscribe, update } = writable<PageData>(defaultPageData);

  return {
    subscribe,
    update(windowWidth: number) {
      const isMobile = getResponsiveDesign(windowWidth) === designOfSP;
      update(() => ({ isMobile }));
    },
  };
}

export const pageData = createStore();
