<script lang="ts">
  import { isIndividualVideo } from '../lib/video'
  import type { VideoResource } from '../model/video'
  import GroupVideoCard from './GroupVideoCard.svelte'
  import IndividualVideoCard from './IndividualVideoCard.svelte'

  interface Props {
    /** 表示する動画。種類（個人・団体）に応じたカードで出す */
    video: VideoResource
  }

  const { video }: Props = $props()
</script>

{#if isIndividualVideo(video)}
  <IndividualVideoCard {video} />
{:else}
  <GroupVideoCard {video} />
{/if}
