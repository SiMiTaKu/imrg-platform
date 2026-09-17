<script context="module" lang="ts">
  import { Heading } from '@imrg-platform/design-system'
  import YoutubeIcon from './_image/youtube-icon.png?w=120;240&format=webp&as=meta'
  import { ImageAssets } from '@shared/ui'
  import { WORK_LIST } from './_data/work-list'
</script>

<script lang="ts">
  import { pageData } from '@shared/lib/device'
</script>

<section class="work-list" class:pc={!$pageData.isMobile} class:sp={$pageData.isMobile}>
  <Heading
    fontSize={$pageData.isMobile ? 30 : 40}
    subtitleFontSize={$pageData.isMobile ? 16 : 20}
    subtitle="Work List"
    title="過去の実績"
  />
  <ul class="cards">
    {#each WORK_LIST as work, index (index)}
      <li class="card">
        <a class="link" href={work.youtube} rel="noopener noreferrer" target="_blank">
          <span class="name">{work.customerName}</span>
          <span class="apparatus">{work.apparatus}</span>
          <div class="youtube">
            <ImageAssets
              width={40}
              height={28}
              alt="Youtubeアイコン"
              lazy={true}
              srcMeta={YoutubeIcon}
              objectFit="cover"
            />
          </div>
        </a>
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  .pc {
    --width: 1024px;
    --card-width: calc((100% - 16px * 4) / 5);
    --name-font-size: 30px;
    --apparatus-font-size: 20px;
  }

  .sp {
    --width: 90%;
    --card-width: calc((100% - 16px) / 2);
    --name-font-size: 24px;
    --apparatus-font-size: 16px;
  }

  .work-list {
    width: var(--width);
    margin: 0 auto;
    padding: 80px 0;
  }

  .cards {
    display: flex;
    gap: 16px;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .card {
    width: var(--card-width);
    padding: 24px 0 8px;
    box-shadow: 0 0 10px #0005;
    border-radius: 8px;
  }

  .link {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    text-decoration: none;
  }

  .name {
    font-size: var(--name-font-size);
    line-height: var(--name-font-size);
    font-weight: bold;
    color: #333;
  }

  .apparatus {
    font-size: var(--apparatus-font-size);
    line-height: var(--apparatus-font-size);
    font-weight: bold;
    color: #555;
  }

  .youtube {
    display: block;
    width: 40px;
  }
</style>
