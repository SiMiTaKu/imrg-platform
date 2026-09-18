<script lang="ts">
  import { ButtonLink } from '@imrg-platform/design-system'
  import { ContentType, findApparatus, findContentType } from '@entities/oshimitsuVideo'
  import { APPARATUSES } from '@shared/config/apparatus'
  import type { ApparatusSlug } from '@shared/model'
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { localizeHref } from '@shared/lib/i18n'
  import { buildSearchPath } from '../lib/search'
  import type { SearchQuery } from '../model/criteria'
  import CheckBoxFieldset from './CheckBoxFieldset.svelte'
  import RadioFieldset from './RadioFieldset.svelte'

  const CONTENT_TYPE_OPTIONS = Object.values(ContentType).map((contentType) => ({
    label: contentType.label(),
    value: contentType.slug,
  }))

  const APPARATUS_OPTIONS = APPARATUSES.map((apparatus) => ({
    label: apparatus.label(),
    value: apparatus.slug,
  }))

  /** 選んでいる条件。手具は選んだ順に並べる */
  let query = $state<SearchQuery>({ contentType: undefined, apparatuses: [] })

  const searchHref = $derived(localizeHref(buildSearchPath(query)))

  /**
   * 種類を選んだとき、条件を置き換える
   * @param value - 選んだ種類の slug
   *
   * @remarks
   * 手具の選択肢は個人を選んでいる間だけ出し、出し直すとチェックが外れた状態になるので、手具の条件も空にする
   */
  const onChangeContentType = (value: string) => {
    query = { contentType: findContentType(value)?.slug, apparatuses: [] }
  }

  /**
   * 手具のチェックを付け外ししたとき、条件に足す・外す
   * @param value - 手具の slug
   * @param checked - 付けたら true
   */
  const onChangeApparatus = (value: string, checked: boolean) => {
    const slug = findApparatus(value)?.slug
    if (!slug) return
    const others = query.apparatuses.filter((apparatus) => apparatus !== slug)
    const apparatuses: ApparatusSlug[] = checked ? [...others, slug] : others
    query = { ...query, apparatuses }
  }
</script>

<RadioFieldset
  legendText={m.oshimitsu_content_type_legend()}
  name="contentType"
  options={CONTENT_TYPE_OPTIONS}
  onchange={onChangeContentType}
/>
{#if query.contentType === ContentType.INDIVIDUAL.slug}
  <CheckBoxFieldset
    legendText={m.oshimitsu_apparatus_legend()}
    name="apparatus"
    options={APPARATUS_OPTIONS}
    onchange={onChangeApparatus}
  />
{/if}
<ButtonLink
  target="_self"
  fontSize={$pageData.isMobile ? 20 : 24}
  width={$pageData.isMobile ? 320 : 343}
  height={56}
  text={m.oshimitsu_search_button()}
  href={searchHref}
/>
