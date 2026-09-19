<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { getLocale } from '@shared/lib/i18n'
  import { PolicyLayout } from '@widgets/policyLayout'
  import PrivacyBodyEnglish from './PrivacyBodyEnglish.svelte'
  import PrivacyBodyJapanese from './PrivacyBodyJapanese.svelte'

  // 表示する言語の本文だけを出す
  const isJapanese = getLocale() === 'ja'
</script>

<PolicyLayout enactedAt={m.privacy_enacted_at()} title={m.meta_privacy_page()}>
  {#if isJapanese}
    <PrivacyBodyJapanese />
  {:else}
    <PrivacyBodyEnglish />
  {/if}
</PolicyLayout>
