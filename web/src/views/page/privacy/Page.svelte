<script context="module" lang="ts">
  import PolicyLayout from '$views/common/policy/PolicyLayout.svelte'

  const INSTAGRAM = 'https://www.instagram.com/takumi.rg/'
  const YOUTUBE_TERMS = 'https://www.youtube.com/t/terms'
  const GOOGLE_PRIVACY = 'https://policies.google.com/privacy'
  const GOOGLE_USER_DATA_POLICY =
    'https://developers.google.com/terms/api-services-user-data-policy'
  const GOOGLE_PERMISSIONS = 'https://security.google.com/settings/security/permissions'
  const CLOUDFLARE_PRIVACY = 'https://www.cloudflare.com/privacypolicy/'
</script>

<PolicyLayout
  enactedAt="制定日: 2026年9月15日 / 改定日: 2026年9月16日 / Effective: September 15, 2026 / Revised: September 16, 2026"
  englishTitle="Privacy Policy"
  title="プライバシーポリシー"
>
  <p>
    男子新体操国際化プロジェクト（以下「当プロジェクト」）は、ウェブサイト「imrg.work」（以下「本サイト」）と、当プロジェクトが運用する
    YouTube 連携ツール「IMRG Video
    Tools」（以下「本ツール」）における情報の取り扱いを、次のとおり定めます。
  </p>

  <h3>1. 運営者</h3>
  <p>男子新体操国際化プロジェクト（代表: 清水琢巳）</p>

  <h3>2. 本サイトで取得する情報</h3>
  <p>
    本サイトには、お名前やメールアドレスなどの個人情報を入力していただく機能はありません。広告配信のためのツールも使用していません。
  </p>
  <p>
    本サイトがどのように見られているかを把握して改善するために、Cloudflare, Inc.
    のアクセス解析サービス「Cloudflare Web Analytics」を使用しています。このサービスは Cookie
    を使わず、閲覧者個人を特定したり追跡したりしません。取得するのは、閲覧されたページ、参照元のページ、ブラウザや端末の種類、国・地域、ページの読み込み時間などの集計のための情報です。詳しくは
    <a href={CLOUDFLARE_PRIVACY} rel="noopener noreferrer" target="_blank"
      >Cloudflare のプライバシーポリシー</a
    >をご覧ください。
  </p>
  <p>
    なお、本サイトのホスティング事業者（Amazon Web Services）が、配信のために接続元の IP
    アドレスなどの技術的な記録を扱う場合があります。
  </p>

  <h3>3. 本ツールがアクセスする情報</h3>
  <p>
    本ツールは、当プロジェクトが自らの YouTube
    チャンネルを管理するための内部ツールで、一般の方には提供していません。YouTube API
    サービスを利用し、Google アカウントによる認証（OAuth 2.0）を通じて、次の情報にアクセスします。
  </p>
  <ul>
    <li>YouTube チャンネルの基本情報（チャンネル名、登録者数など）</li>
    <li>動画のアップロードと、タイトル・概要欄・タグ・サムネイル・字幕の登録と更新</li>
    <li>動画の再生数や視聴維持率などのアナリティクス</li>
  </ul>

  <h3>4. 利用目的</h3>
  <p>
    上記の情報は、当プロジェクトのチャンネルでの動画の公開・管理と、動画の内容を改善するための分析にのみ使います。広告目的での利用や、第三者への販売・提供は行いません。
  </p>

  <h3>5. 保存と管理</h3>
  <p>
    認証で得たアクセストークンは運営者の端末内にのみ保存し、外部のサーバーには送信しません。YouTube
    から取得したデータも、上記の目的に必要な範囲でのみ保存します。
  </p>

  <h3>6. 第三者への提供</h3>
  <p>法令に基づく場合を除き、取得した情報を第三者に提供することはありません。</p>

  <h3>7. Google のサービスについて</h3>
  <p>
    本ツールは YouTube API
    サービスを利用しています。本ツールの利用には、次の規約とポリシーも適用されます。
  </p>
  <ul>
    <li>
      YouTube 利用規約:
      <a href={YOUTUBE_TERMS} rel="noopener noreferrer" target="_blank">{YOUTUBE_TERMS}</a>
    </li>
    <li>
      Google プライバシーポリシー:
      <a href={GOOGLE_PRIVACY} rel="noopener noreferrer" target="_blank">{GOOGLE_PRIVACY}</a>
    </li>
  </ul>
  <p>
    本ツールが Google API から受け取った情報の使用と他のアプリへの転送は、限定使用の要件を含む
    <a href={GOOGLE_USER_DATA_POLICY} rel="noopener noreferrer" target="_blank"
      >Google API サービスのユーザーデータに関するポリシー</a
    >に従います。
  </p>

  <h3>8. アクセス権の取り消し</h3>
  <p>
    本ツールに与えたアクセス権は、Google アカウントのセキュリティ設定からいつでも取り消せます。
    <a href={GOOGLE_PERMISSIONS} rel="noopener noreferrer" target="_blank">{GOOGLE_PERMISSIONS}</a>
  </p>

  <h3>9. 改定</h3>
  <p>
    本ポリシーは必要に応じて改定します。改定後の内容は、本ページに掲載した時点から効力を生じます。
  </p>

  <h3>10. お問い合わせ</h3>
  <p>
    本ポリシーに関するお問い合わせは、<a href={INSTAGRAM} rel="noopener noreferrer" target="_blank"
      >Instagram のダイレクトメッセージ</a
    >で受け付けています。
  </p>

  <section lang="en">
    <p>
      The Men's Rhythmic Gymnastics Internationalization Project ("we") describes below how
      information is handled on the website imrg.work (the "Site") and in IMRG Video Tools, the
      YouTube tool we operate (the "Tool").
    </p>

    <h3>1. Operator</h3>
    <p>Men's Rhythmic Gymnastics Internationalization Project (Representative: Takumi Shimizu)</p>

    <h3>2. Information collected on the Site</h3>
    <p>
      The Site has no forms for entering personal information such as your name or email address. We
      do not use any advertising tools.
    </p>
    <p>
      To understand how the Site is used and to improve it, we use Cloudflare Web Analytics, an
      analytics service provided by Cloudflare, Inc. It does not use cookies and does not identify
      or track individual visitors. It collects only information for aggregate statistics, such as
      the pages viewed, referring pages, browser and device type, country or region, and page load
      times. For details, see the
      <a href={CLOUDFLARE_PRIVACY} rel="noopener noreferrer" target="_blank"
        >Cloudflare Privacy Policy</a
      >.
    </p>
    <p>
      Our hosting provider (Amazon Web Services) may process technical records such as IP addresses
      in order to deliver the Site.
    </p>

    <h3>3. Information accessed by the Tool</h3>
    <p>
      The Tool is an internal tool we use to manage our own YouTube channel and is not offered to
      the public. It uses YouTube API Services and, through Google account authorization (OAuth
      2.0), accesses:
    </p>
    <ul>
      <li>Basic channel information (channel name, subscriber count, etc.)</li>
      <li>Video uploads, and the titles, descriptions, tags, thumbnails and captions of videos</li>
      <li>Video analytics such as views and audience retention</li>
    </ul>

    <h3>4. Purpose of use</h3>
    <p>
      This information is used only to publish and manage videos on our channel and to analyze them
      for improvement. It is never used for advertising, sold, or shared with third parties.
    </p>

    <h3>5. Storage</h3>
    <p>
      Access tokens are stored only on the operator's own computer and are never sent to external
      servers. Data retrieved from YouTube is stored only to the extent needed for the purposes
      above.
    </p>

    <h3>6. Disclosure to third parties</h3>
    <p>We do not disclose any information to third parties except as required by law.</p>

    <h3>7. Google services</h3>
    <p>
      The Tool uses YouTube API Services. By using the Tool, you are also bound by the
      <a href={YOUTUBE_TERMS} rel="noopener noreferrer" target="_blank">YouTube Terms of Service</a>
      and the
      <a href={GOOGLE_PRIVACY} rel="noopener noreferrer" target="_blank">Google Privacy Policy</a>.
      The Tool's use and transfer of information received from Google APIs adheres to the
      <a href={GOOGLE_USER_DATA_POLICY} rel="noopener noreferrer" target="_blank"
        >Google API Services User Data Policy</a
      >, including the Limited Use requirements.
    </p>

    <h3>8. Revoking access</h3>
    <p>
      You can revoke the Tool's access at any time from your Google account security settings:
      <a href={GOOGLE_PERMISSIONS} rel="noopener noreferrer" target="_blank">{GOOGLE_PERMISSIONS}</a
      >
    </p>

    <h3>9. Changes</h3>
    <p>We may update this policy as needed. Changes take effect when posted on this page.</p>

    <h3>10. Contact</h3>
    <p>
      Please contact us via <a href={INSTAGRAM} rel="noopener noreferrer" target="_blank"
        >Instagram direct message</a
      >.
    </p>
  </section>
</PolicyLayout>
