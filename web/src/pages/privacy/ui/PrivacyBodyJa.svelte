<script lang="ts">
  import {
    CLOUDFLARE_PRIVACY,
    GOOGLE_PERMISSIONS,
    GOOGLE_PRIVACY,
    GOOGLE_USER_DATA_POLICY,
    INSTAGRAM,
    YOUTUBE_TERMS,
  } from '../config/links'
</script>

<!-- 日本語の本文 -->
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
