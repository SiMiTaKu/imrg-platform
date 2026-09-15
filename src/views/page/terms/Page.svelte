<script context='module' lang='ts'>
  import PolicyLayout from "$views/common/policy/PolicyLayout.svelte"

  const INSTAGRAM = "https://www.instagram.com/takumi.rg/"
  const YOUTUBE_TERMS = "https://www.youtube.com/t/terms"
</script>

<PolicyLayout
  enactedAt='制定日: 2026年9月15日 / Effective: September 15, 2026'
  englishTitle='Terms of Service'
  title='利用規約'
>
  <p>
    この利用規約（以下「本規約」）は、男子新体操国際化プロジェクト（以下「当プロジェクト」）が運営するウェブサイト「imrg.work」（以下「本サイト」）と、YouTube
    連携ツール「IMRG Video Tools」（以下「本ツール」）の利用条件を定めるものです。
  </p>

  <h3>1. 適用</h3>
  <p>
    本規約は、本サイトと本ツールの利用に関わるすべての場面に適用されます。本ツールは YouTube API
    サービスを利用しており、本ツールを利用する場合は
    <a href={YOUTUBE_TERMS}
       rel='noopener noreferrer'
       target='_blank'>YouTube 利用規約</a>にも同意したものとみなします。
  </p>

  <h3>2. 著作権</h3>
  <p>
    本サイトに掲載している文章・画像・動画などの著作権は、当プロジェクトまたは正当な権利者に帰属します。私的利用の範囲を超える無断の転載・複製・改変はお断りします。
  </p>

  <h3>3. 禁止事項</h3>
  <ul>
    <li>法令または公序良俗に反する行為</li>
    <li>本サイトの運営を妨げる行為、不正アクセスやそれを試みる行為</li>
    <li>当プロジェクトまたは第三者の権利や名誉を侵害する行為</li>
  </ul>

  <h3>4. 免責</h3>
  <p>
    本サイトの情報は正確であるよう努めていますが、その正確性・完全性を保証するものではありません。競技規則などの解説は、各競技団体が定める公式の規則を正とします。本サイトや本ツールの利用によって生じた損害について、当プロジェクトの故意または重大な過失による場合を除き、責任を負いません。
  </p>

  <h3>5. 外部サイトへのリンク</h3>
  <p>本サイトからリンクしている外部サイトの内容について、当プロジェクトは責任を負いません。</p>

  <h3>6. 変更</h3>
  <p>本規約は必要に応じて変更します。変更後の内容は、本ページに掲載した時点から効力を生じます。</p>

  <h3>7. 準拠法</h3>
  <p>本規約は日本法に準拠します。</p>

  <h3>8. お問い合わせ</h3>
  <p>
    本規約に関するお問い合わせは、<a href={INSTAGRAM}
                      rel='noopener noreferrer'
                      target='_blank'>Instagram のダイレクトメッセージ</a>で受け付けています。
  </p>

  <section lang='en'>
    <p>
      These Terms of Service (the "Terms") set out the conditions for using imrg.work (the "Site") and IMRG Video
      Tools (the "Tool"), operated by the Men's Rhythmic Gymnastics Internationalization Project ("we").
    </p>

    <h3>1. Scope</h3>
    <p>
      These Terms apply to all use of the Site and the Tool. The Tool uses YouTube API Services; by using the
      Tool, you agree to be bound by the
      <a href={YOUTUBE_TERMS}
         rel='noopener noreferrer'
         target='_blank'>YouTube Terms of Service</a>.
    </p>

    <h3>2. Copyright</h3>
    <p>
      Copyright in the text, images and videos on the Site belongs to us or to their rightful owners.
      Reproduction, redistribution or modification beyond personal use without permission is not allowed.
    </p>

    <h3>3. Prohibited conduct</h3>
    <ul>
      <li>Any act that violates laws or public order and morals</li>
      <li>Interfering with the operation of the Site, or unauthorized access or attempts at it</li>
      <li>Infringing the rights or reputation of us or any third party</li>
    </ul>

    <h3>4. Disclaimer</h3>
    <p>
      We strive to keep the information on the Site accurate but do not guarantee its accuracy or completeness.
      For competition rules, the official rules of the governing bodies prevail. Except in cases of our willful
      misconduct or gross negligence, we are not liable for any damage arising from use of the Site or the Tool.
    </p>

    <h3>5. External links</h3>
    <p>We are not responsible for the content of external sites linked from the Site.</p>

    <h3>6. Changes</h3>
    <p>We may change these Terms as needed. Changes take effect when posted on this page.</p>

    <h3>7. Governing law</h3>
    <p>These Terms are governed by the laws of Japan.</p>

    <h3>8. Contact</h3>
    <p>
      Please contact us via <a href={INSTAGRAM}
                               rel='noopener noreferrer'
                               target='_blank'>Instagram direct message</a>.
    </p>
  </section>
</PolicyLayout>
