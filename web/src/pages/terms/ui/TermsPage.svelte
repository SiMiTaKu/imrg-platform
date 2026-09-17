<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { SECONDARY_LOCALE, showsSecondaryText } from '@shared/lib/i18n'
  import { PolicyLayout } from '@widgets/policyLayout'
  import TermsBodyEn from './TermsBodyEn.svelte'
  import TermsBodyJa from './TermsBodyJa.svelte'

  // 日本語ページは、これまでどおり日本語の本文のあとに英語の本文を載せる。英語ページは英語だけ
  const showsBoth = showsSecondaryText()
</script>

<PolicyLayout
  enactedAt={showsBoth
    ? `${m.terms_enacted_at()} / ${m.terms_enacted_at({}, { locale: SECONDARY_LOCALE })}`
    : m.terms_enacted_at()}
  subtitle={showsBoth ? m.meta_terms_page({}, { locale: SECONDARY_LOCALE }) : undefined}
  title={m.meta_terms_page()}
>
  {#if showsBoth}
    <TermsBodyJa />
    <section lang="en">
      <TermsBodyEn />
    </section>
  {:else}
    <TermsBodyEn />
  {/if}
</PolicyLayout>
