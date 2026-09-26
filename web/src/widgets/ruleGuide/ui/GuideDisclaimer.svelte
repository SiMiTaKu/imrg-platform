<script lang="ts">
  import { m } from '$lib/paraglide/messages'

  /*
    解説のページに必ず出す断り書き。
    「個人が作ったもの」「正式な判断は公式の規則集による」の2つを言う。
    委員会へ伝えた約束（docs/rules-guide.md の3）を、書き忘れで破らないための部品。
    ページの側で省略できないよう、型（GuidePage.disclaimer）でも必須にしてある
  */
</script>

<aside class="disclaimer">
  <p>{m.rule_guide_disclaimer_individual()}</p>
  <p>{m.rule_guide_disclaimer_authority()}</p>
</aside>

<style lang="scss">
  .disclaimer {
    display: flex;
    gap: $space-size-8;
    padding: $space-size-16;
    font-size: $font-size-14;
    color: map.get($gray, light-text);
    border-radius: $border-radius-8;
    background-color: map.get($gray, background);
    flex-direction: column;
    line-height: 1.8;
  }

  p {
    /* 段落どうしの間隔は親の gap で作る */
    padding: 0;
  }
</style>
