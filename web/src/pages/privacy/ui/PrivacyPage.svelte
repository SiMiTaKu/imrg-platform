<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { SECONDARY_LOCALE, showsSecondaryText } from '@shared/lib/i18n'
  import { PolicyLayout } from '@widgets/policyLayout'
  import PrivacyBodyEn from './PrivacyBodyEn.svelte'
  import PrivacyBodyJa from './PrivacyBodyJa.svelte'

  // 日本語ページは、これまでどおり日本語の本文のあとに英語の本文を載せる。英語ページは英語だけ
  const showsBoth = showsSecondaryText()
</script>

<PolicyLayout
  enactedAt={showsBoth
    ? `${m.privacy_enacted_at()} / ${m.privacy_enacted_at({}, { locale: SECONDARY_LOCALE })}`
    : m.privacy_enacted_at()}
  subtitle={showsBoth ? m.meta_privacy_page({}, { locale: SECONDARY_LOCALE }) : undefined}
  title={m.meta_privacy_page()}
>
  {#if showsBoth}
    <PrivacyBodyJa />
    <section lang="en">
      <PrivacyBodyEn />
    </section>
  {:else}
    <PrivacyBodyEn />
  {/if}
</PolicyLayout>
