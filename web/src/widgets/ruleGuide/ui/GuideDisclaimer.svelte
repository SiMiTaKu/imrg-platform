<script lang="ts">
  import { m } from '$lib/paraglide/messages'

  /*
    公式の規則集の販売ページ。発行元のサイト。
    出典を示して買ってもらう動線は、発行元の利になるので置いている
  */
  const RULEBOOK_SALES_URL = 'https://jpn-gym.or.jp/hanbai/'

  /*
    解説のページに必ず出す断り書き。
    「個人が作ったもの」「どの年版にもとづくか」「正式な判断は公式の規則集による」の3つを言う。
    委員会へ伝えた約束（docs/rules-guide.md の3）を、書き忘れで破らないための部品。
    ページの側で省略できないよう、型（GuidePage.disclaimer）でも必須にしてある。

    本文の邪魔をしないよう、「※」を付けた小さい文字で控えめに出す
  */
</script>

<aside class="disclaimer">
  <p>※ {m.rule_guide_disclaimer_individual()}</p>
  <p>※ {m.rule_guide_disclaimer_edition()}</p>
  <p>
    ※ {m.rule_guide_disclaimer_authority()}
    {m.rule_guide_disclaimer_buy()}
    <a href={RULEBOOK_SALES_URL} target="_blank" rel="noopener noreferrer"
      >{m.rule_guide_disclaimer_buy_link()}</a
    >
  </p>
</aside>

<style lang="scss">
  .disclaimer {
    display: flex;
    flex-direction: column;
    gap: $space-size-4;
    padding-top: $space-size-24;
    font-size: $font-size-12;
    line-height: 1.8;
    color: map.get($gray, light-text);
  }

  p {
    padding-left: 1.2em;
    text-indent: -1.2em;
  }

  a {
    color: map.get($sky-blue, text);
  }
</style>
