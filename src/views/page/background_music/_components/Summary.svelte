<script context="module" lang="ts">
  import WithEnglishHeading from '../../../atomic/heading/WithEnglishHeading.svelte'
  const FLOW = [
    {
      title: '問い合わせ',
      description: 'インスタグラムのDMにてご依頼ください。',
    },
    {
      title: '打ち合わせ',
      description: 'お問い合わせ内容について、打ち合わせをします。',
    },
    {
      title: '編曲',
      description: '打ち合わせの内容から、編曲をします。',
    },
    {
      title: '納品',
      description: '編集した曲をデータでお渡しします。',
    },
  ]
</script>

<script lang="ts">
  import { pageData } from '$views/atomic/device-store/store'
</script>

<section class="flow-section" class:pc={!$pageData.isMobile} class:sp={$pageData.isMobile}>
  <div class="message">
    あらゆる曲を演技に<br />合わせて編曲します!!
  </div>
  <WithEnglishHeading englishTitle="Editing Flow" title="編曲の流れ" />
  <ul class="flow">
    {#each FLOW as flow, index (index)}
      <li class="item">
        <div class="item-index">{index + 1}</div>
        <h3 class="item-label">{flow.title}</h3>
        <p class="item-description">{flow.description}</p>
      </li>
    {/each}
  </ul>
</section>

<style lang="scss">
  .pc {
    --width: 1024px;
    --message-font-size: 36px;
    --message-margin-bottom: 80px;
    --flow-flex-direction: row;
    --item-flex-direction: column;
    --item-gap: 20px;
    --item-width: calc(((100% - 20px * 3) / 4) - 16px);
    --item-padding: 16px;
    --item-label-width: 100%;
    --item-label-height: 40px;
    --item-label-font-size: 24px;
    --item-label-after-width: 50px;
    --item-label-after-height: 3px;
    --item-label-after-top: 64px;
    --item-label-after-left: 50%;
    --item-label-after-transform: translateX(-50%);
    --item-description-width: 100%;
  }

  .sp {
    --width: 90%;
    --message-font-size: 30px;
    --message-margin-bottom: 60px;
    --flow-flex-direction: column;
    --item-flex-direction: row;
    --item-gap: 24px;
    --item-width: calc(100% - 24px);
    --item-padding: 8px 8px 8px 16px;
    --item-label-width: 36%;
    --item-label-font-size: 20px;
    --item-label-after-width: 2px;
    --item-label-after-height: 30px;
    --item-label-after-top: 50%;
    --item-label-after-left: 38%;
    --item-label-after-transform: translateY(-50%);
    --item-description-width: 64%;
  }

  .flow-section {
    width: var(--width);
    margin: 0 auto;
    padding: 0 0 80px;
    text-align: center;
  }

  .message {
    margin-bottom: var(--message-margin-bottom);
    font-size: var(--message-font-size);
    font-weight: bold;
    color: #666;
    text-shadow: 3px 3px #ffa;
  }

  .flow {
    display: flex;
    flex-direction: var(--flow-flex-direction);
    gap: 20px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .item {
    position: relative;
    display: flex;
    gap: var(--item-gap);
    width: var(--item-width);
    padding: var(--item-padding);
    border-radius: 8px;
    flex-direction: var(--item-flex-direction);
    box-shadow: 0 0 10px rgb(0, 0, 0, 0.3);
  }

  .item-index {
    position: absolute;
    top: -10px;
    left: -10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    font-weight: bold;
    color: white;
    border-radius: 1em;
    background: rgb(50, 150, 255);
  }

  .item-label {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--item-label-width);
    height: var(--item-label-height);
    margin: 0;
    font-size: var(--item-label-font-size);
    font-weight: bold;
    text-shadow: 0 0 10px rgb(50, 150, 255, 0.5);

    &::after {
      position: absolute;
      display: block;
      width: var(--item-label-after-width);
      height: var(--item-label-after-height);
      background: rgb(50, 150, 255);
      top: var(--item-label-after-top);
      left: var(--item-label-after-left);
      transform: var(--item-label-after-transform);
      content: '';
    }
  }

  .item-description {
    width: var(--item-description-width);
    text-align: left;
    margin: 0;
  }
</style>
