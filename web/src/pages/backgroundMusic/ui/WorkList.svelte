<script lang="ts">
  import { m } from '$lib/paraglide/messages'
  import { pageData } from '@shared/lib/device'
  import { apparatusOfSlug } from '@shared/lib/apparatus'
  import { getLocale, localizedText } from '@shared/lib/i18n'
  import type { SiteLocale } from '@shared/lib/i18n'
  import { ImageAssets } from '@shared/ui'
  import { SectionHeading } from '@widgets/orderService'
  import { WORK_LIST } from '../config/workList'
  import { WORKS_HEADING } from '../config/content'
  import YoutubeIcon from '../images/youtube-icon.png?w=120;240&format=webp&as=meta'

  const locale = getLocale() as SiteLocale
  const isMobile = $derived($pageData.isMobile)
</script>

<section class="work-list" class:mobile={isMobile} id="works">
  <div class="inner">
    <SectionHeading
      eyebrow={WORKS_HEADING.eyebrow}
      title={m.background_music_work_list_title()}
      lead={WORKS_HEADING.lead}
    />

    <ul class="cards">
      {#each WORK_LIST as work, index (index)}
        <li>
          <a href={work.youtube} rel="noopener noreferrer" target="_blank">
            <span class="apparatus">{apparatusOfSlug(work.apparatus).label()}</span>
            <span class="name">{localizedText(work.customerName, locale)}</span>
            <span class="watch">
              <span class="icon">
                <ImageAssets
                  width={40}
                  height={28}
                  alt={m.background_music_youtube_icon_alt()}
                  lazy={true}
                  imageSourceMeta={YoutubeIcon}
                  objectFit="cover"
                />
              </span>
              <span class="watch-label">演技を見る</span>
            </span>
          </a>
        </li>
      {/each}
    </ul>

    <p class="count">これまでに {WORK_LIST.length} 曲を編集しました。</p>
  </div>
</section>

<style lang="scss">
  .work-list {
    width: 100%;
    background: map.get($sky-blue, background);
  }

  .inner {
    max-width: 1024px;
    margin: 0 auto;
    padding: $space-size-80 $space-size-24;
  }

  .mobile .inner {
    padding: $space-size-48 $space-size-16;
  }

  .cards {
    display: grid;
    gap: $space-size-16;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .mobile .cards {
    gap: $space-size-12;
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  // 手具・名前・見るボタンを縦に積むだけ。重ねない
  .cards a {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: $space-size-8;
    height: 100%;
    box-sizing: border-box;
    padding: $space-size-20 $space-size-12;
    color: inherit;
    border: 1px solid map.get($sky-blue, 100);
    border-radius: 8px;
    background: $white;
    transition:
      border-color 0.15s ease,
      transform 0.15s ease;
    text-align: center;
    text-decoration: none;
  }

  .cards a:hover {
    border-color: map.get($amber, border);
    transform: translateY(-2px);
  }

  .apparatus {
    padding: $space-size-2 $space-size-8;
    font-size: $font-size-11;
    font-weight: bold;
    color: map.get($sky-blue, text);
    border-radius: 999px;
    background: map.get($sky-blue, background);
    letter-spacing: 0.06em;
  }

  .name {
    font-size: $font-size-20;
    font-weight: bold;
    line-height: 1.4;
    color: map.get($gray, text);
    overflow-wrap: anywhere;
  }

  // 日本語以外の名前は日本語より長いので小さくする
  .name:not(:lang(ja)) {
    font-size: $font-size-16;
  }

  // 下に置く。重ねない
  .watch {
    display: inline-flex;
    align-items: center;
    gap: $space-size-4;
    margin-top: auto;
    padding-top: $space-size-8;
  }

  .icon {
    display: block;
    width: 32px;
  }

  .watch-label {
    font-size: $font-size-12;
    font-weight: bold;
    color: map.get($sky-blue, text);
  }

  .count {
    margin: $space-size-24 0 0;
    font-size: $font-size-12;
    color: map.get($gray, light-text);
    text-align: center;
  }
</style>
