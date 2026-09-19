<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { getLocale } from '@shared/lib/i18n'
  import { PolicyLayout } from '@widgets/policyLayout'
  import PrivacyBodyChinese from './PrivacyBodyChinese.svelte'
  import PrivacyBodyEnglish from './PrivacyBodyEnglish.svelte'
  import PrivacyBodyJapanese from './PrivacyBodyJapanese.svelte'

  // 表示する言語の本文だけを出す
  const locale = getLocale()
</script>

<PolicyLayout enactedAt={m.privacy_enacted_at()} title={m.meta_privacy_page()}>
  {#if locale === 'ja'}
    <PrivacyBodyJapanese />
  {:else if locale === 'zh'}
    <PrivacyBodyChinese />
  {:else}
    <PrivacyBodyEnglish />
  {/if}
</PolicyLayout>
