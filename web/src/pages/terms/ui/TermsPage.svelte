<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { getLocale } from '@shared/lib/i18n'
  import { PolicyLayout } from '@widgets/policyLayout'
  import TermsBodyChinese from './TermsBodyChinese.svelte'
  import TermsBodyEnglish from './TermsBodyEnglish.svelte'
  import TermsBodyJapanese from './TermsBodyJapanese.svelte'
  import TermsBodyKorean from './TermsBodyKorean.svelte'

  // 表示する言語の本文だけを出す。訳が無い言語は英語の本文にする
  const locale = getLocale()
</script>

<PolicyLayout enactedAt={m.terms_enacted_at()} title={m.meta_terms_page()}>
  {#if locale === 'ja'}
    <TermsBodyJapanese />
  {:else if locale === 'zh'}
    <TermsBodyChinese />
  {:else if locale === 'ko'}
    <TermsBodyKorean />
  {:else}
    <TermsBodyEnglish />
  {/if}
</PolicyLayout>
