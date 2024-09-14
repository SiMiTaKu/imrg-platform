import Page from "$views/page/oshimitsu/Page.svelte"
import { render } from "@testing-library/svelte"
import { expect, it } from "vitest"

it("Form Test", () => {
  const { getByRole, getAllByRole } = render(Page)
  getAllByRole("combobox").map((combobox) => console.log(combobox))
  getByRole("document").toBeInTheDocument()
  const combobox = getByRole("combobox", { name: /セレクトボックス/i })
  expect(combobox).toBeInTheDocument()
})
