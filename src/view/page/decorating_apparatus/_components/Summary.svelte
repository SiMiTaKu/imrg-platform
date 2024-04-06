<script context='module' lang='ts'>
  import WithEnglishHeading from "../../../atomic/heading/WithEnglishHeading.svelte";

  const FLOW = [
    {
      title: "問い合わせ",
      description: "インスタグラムのDMにてご依頼ください。",
    },
    {
      title: "打ち合わせ",
      description: "お問い合わせ内容について、打ち合わせをします。",
    },
    {
      title: "デザイン",
      description: "打ち合わせの内容から、デザインを作成します。",
    },
    {
      title: "装飾",
      description: "デザインを元に、装飾を製作します。",
    },
    {
      title: "納品",
      description: "製作した装飾をお渡しします。",
    },
  ];
</script>

<script lang='ts'>
  import { pageData } from "../../../atomic/device-store/store";
</script>

<section
  class='flow-section'
  class:pc={!$pageData.isMobile}
  class:sp={$pageData.isMobile}
>
  <div class='message'>
    あなたの要望に合わせた<br />世界に一つだけの装飾をいたします!!
  </div>
  <WithEnglishHeading englishTitle='Decorating Flow' title='装飾の流れ' />
  <ul class='flow'>
    {#each FLOW as flow, index (index)}
      <li class='item'>
        <div class='item-index'>{index + 1}</div>
        <h3 class='item-label'>{flow.title}</h3>
        <p class='item-description'>{flow.description}</p>
      </li>
    {/each}
  </ul>
</section>

<style lang='scss'>
  .pc {
    --width: 1024px;
    --message-font-size: 36px;
    --message-margin-bottom: 80px;
    --flow-flex-direction: row;
    --item-flex-direction: column;
    --item-gap: 20px;
    --item-width: calc(((100% - 20px * 4) / 5) - 16px);
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
    padding: 0 0 80px;
    width: var(--width);
    margin: 0 auto;
    text-align: center;
  }

  .message {
    margin-bottom: var(--message-margin-bottom);
    font-size: var(--message-font-size);
    color: #666666;
    font-weight: bold;
    text-shadow: 3px 3px #ffffaa;
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
    flex-direction: var(--item-flex-direction);
    gap: var(--item-gap);
    width: var(--item-width);
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    padding: var(--item-padding);
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
    text-shadow: 0 0 10px rgba(50, 150, 255, 0.5);

    &:after {
      position: absolute;
      top: var(--item-label-after-top);
      left: var(--item-label-after-left);
      width: var(--item-label-after-width);
      height: var(--item-label-after-height);
      transform: var(--item-label-after-transform);
      content: "";
      display: block;
      background: rgb(50, 150, 255);
    }
  }

  .item-description {
    width: var(--item-description-width);
    text-align: left;
    margin: 0;
  }
</style>
