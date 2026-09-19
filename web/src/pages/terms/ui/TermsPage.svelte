<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { getLocale } from '@shared/lib/i18n'
  import { PolicyLayout } from '@widgets/policyLayout'
  import TermsBodyEnglish from './TermsBodyEnglish.svelte'
  import TermsBodyJapanese from './TermsBodyJapanese.svelte'

  // 表示する言語の本文だけを出す
  const isJapanese = getLocale() === 'ja'
</script>

<PolicyLayout enactedAt={m.terms_enacted_at()} title={m.meta_terms_page()}>
  {#if isJapanese}
    <TermsBodyJapanese />
  {:else}
    <TermsBodyEnglish />
  {/if}
</PolicyLayout>
