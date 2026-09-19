<script lang="ts">
  import { Heading } from '@imrg-platform/design-system'
  import { m } from '$lib/paraglide/messages'
  import { getLocale, localizedText } from '@shared/lib/i18n'
  import type { SiteLocale } from '@shared/lib/i18n'
  import { pageData } from '@shared/lib/device'
  import { ImageAssets } from '@shared/ui'
  import { apparatusOfSlug } from '@shared/lib/apparatus'
  import { WORK_LIST } from '../config/workList'
  import YoutubeIcon from '../images/youtube-icon.png?w=120;240&format=webp&as=meta'

  const locale = getLocale() as SiteLocale
</script>

<section class="work-list" class:desktop={!$pageData.isMobile} class:mobile={$pageData.isMobile}>
  <Heading
    fontSize={$pageData.isMobile ? 30 : 40}
    subtitleFontSize={$pageData.isMobile ? 16 : 20}
    title={m.background_music_work_list_title()}
  />
  <ul class="cards">
    {#each WORK_LIST as work, index (index)}
      <li class="card">
        <a class="link" href={work.youtube} rel="noopener noreferrer" target="_blank">
          <span class="name">{localizedText(work.customerName, locale)}</span>
          <span class="apparatus">{apparatusOfSlug(work.apparatus).label()}</span>
          <div class="youtube">
            <ImageAssets
              width={40}
              height={28}
              alt={m.background_music_youtube_icon_alt()}
              lazy={true}
              imageSourceMeta={YoutubeIcon}
              objectFit="cover"
            />
          </div>
        </a>
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  .desktop {
    --width: 1024px;
    --card-width: calc((100% - 16px * 4) / 5);
    --name-font-size: 30px;
    --apparatus-font-size: 20px;
  }

  .mobile {
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
    flex-wrap: wrap;
    gap: 16px;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .card {
    width: var(--card-width);
    padding: 24px 0 8px;
    border-radius: 8px;
    box-shadow: 0 0 10px #0005;
  }

  .link {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    text-decoration: none;
  }

  .name {
    font-size: var(--name-font-size);
    font-weight: bold;
    line-height: var(--name-font-size);
    color: #333;
  }

  // 日本語以外の名前は日本語より長く、カードからはみ出すため小さくする。
  // 日本語ページの見た目（計算済みスタイル）を変えないよう、変数を足さずに言語で当てる
  .desktop .name:not(:lang(ja)) {
    font-size: 22px;
    line-height: 22px;
    text-align: center;
  }

  .mobile .name:not(:lang(ja)) {
    font-size: 18px;
    line-height: 18px;
    text-align: center;
  }

  .apparatus {
    font-size: var(--apparatus-font-size);
    font-weight: bold;
    line-height: var(--apparatus-font-size);
    color: #555;
  }

  .youtube {
    display: block;
    width: 40px;
  }
</style>
