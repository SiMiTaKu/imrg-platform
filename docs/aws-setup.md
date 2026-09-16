# AWS と Amplify のコンソール作業手順

`docs/TODO.md` のPhase 0のうち、コンソールでの操作が必要なものをまとめた手順書。
上から順に進める。所要時間の目安は、1と2で20分、3で15分、4で5分。

---

## 1. root ユーザーに MFA を設定する（TODO 0-5）

rootは、請求から権限まですべてを操作できる。ここを守るのが最優先。

1. <https://console.aws.amazon.com/> にroot（登録メールアドレス）でサインインする
2. 画面右上のアカウント名をクリックし、**セキュリティー認証情報** を開く
3. **多要素認証（MFA）** の欄で **MFA デバイスを割り当て** を押す
4. デバイス名を入れ、**認証アプリケーション** を選ぶ（パスキーでもよい）
5. 表示されたQRコードを認証アプリ（Google Authenticator、1Passwordなど）で読み取る
6. アプリに出る6桁のコードを、**続けて 2 回分**入力して登録する
7. 同じ画面に **アクセスキー** があれば削除する。rootのアクセスキーは使わない

確認： いったんサインアウトし、rootで入り直したときにコードを求められること。

> 認証アプリを入れた端末を失うと入れなくなる。復旧用に、別の端末かパスキーをもう 1 つ登録しておくと安全。

## 2. 請求の保護（TODO 0-6）

意図しない課金に早く気づくための設定。

1. rootでサインインしたまま、右上のアカウント名から **請求とコスト管理** を開く
2. 左メニューの **Budgets** → **予算を作成**
3. **月次コスト予算**（テンプレート）を選ぶ
4. 予算額を決める（例： 3,000円）。しきい値は実績85% と予測100% の2つにする
5. 通知先のメールアドレスを入れて作成する
6. 左メニューの **コスト異常検知** を開く
   - **モニターを作成** → 監視タイプは「AWSサービス」を選ぶ
   - アラートのしきい値は、金額（例： 1,000円）か前週比で決める
   - 通知先に手順5と同じメールアドレスを入れる
7. **アカウント設定** で、支払い方法と連絡先メールアドレスが今も使えるものか確認する

補足： 手順3で作る管理用ユーザーから請求画面を見るには、**アカウント設定 → IAM ユーザー/ロールによる請求情報へのアクセス** を有効にする。

## 3. 管理用のユーザーを作り、root の常用をやめる（TODO 0-5、0-7）

日常の作業はrootではなく、このユーザーで行う。

1. **IAM** → **ユーザー** → **ユーザーの作成**
2. ユーザー名を決める（例： `admin`）
   - **AWS マネジメントコンソールへのアクセス** を有効にする
3. 権限は当面 **AdministratorAccess** を直接アタッチする（Phase 0-7で必要な範囲に絞る）
4. 作成後、そのユーザーでサインインし直し、**セキュリティー認証情報** からMFAを割り当てる
5. サインインURLを控える： `https://<アカウントID>.signin.aws.amazon.com/console`
6. 以後、rootを使うのはアカウント設定の変更など限られた場面だけにする

CLIを使うときは、アクセスキーを作らずIAM Identity Center（`aws sso login`）を使うほうが安全。
急ぎでなければPhase 4で整える。

## 4. Amplify の書き換えルールを直す（TODO 0-1）

**いま公開中のサイトで、書き出した各ページの HTML が配信されていない。** 原因はSPA用の書き換えルール。

1. <https://console.aws.amazon.com/amplify/> を開き、対象アプリ（imrg-web-main）を選ぶ
2. 左メニューの **ホスティング** → **書き換えとリダイレクト** → **テキストエディターを開く**
3. 現在は次のルールが入っている

   ```json
   [
     {
       "source": "</^[^.]+$|\\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|woff2|ttf|map|json|webp)$)([^.]+$)/>",
       "status": "200",
       "target": "/index.html"
     }
   ]
   ```

   前半の `^[^.]+$` が、ドットを含まないパスをすべて書き換えている。
   `/privacy/` や `/calendar/` にはドットが無いため、ここに当たって入れ物ページへ差し替えられる。
   **拡張子の一覧に `html` を足すだけでは直らない**

4. 次の内容に置き換えて保存する

   ```json
   [
     {
       "source": "/<*>",
       "status": "404-200",
       "target": "/index.html"
     }
   ]
   ```

   `404-200` は「ファイルが無いときだけ `/index.html` を返す」という指定。
   書き出したページはそのまま配信され、存在しないパスだけが入れ物ページになる

5. 保存したら、手元で確認する

   ```bash
   # 20000 前後になれば成功（入れ物ページなら 1156）
   curl -sI https://imrg.work/privacy/ | grep -i content-length

   # 本文が返れば成功
   curl -s https://imrg.work/privacy/ | grep -c "Cloudflare Web"

   # XML が返れば成功（PR #253 をマージしたあと）
   curl -s https://imrg.work/sitemap.xml | head -3

   # 大会の詳細ページ
   curl -s https://imrg.work/calendar/2026-10-30-733ecd/ | grep -c "SportsEvent"
   ```

6. うまくいかないときは、元のルールに戻せば現状に復帰できる。設定前のJSONを控えておく
7. 書き換え先を `/index.html` から `/404.html` へ変える（任意）
   - 現状でも問題は出ない。存在しないパスでは、トップページの中身が404として返っている
   - `/404.html` に変えると、存在しないパスでは軽い入れ物ページだけが返る

> `amplify.yml` にも `redirects:` の記述があるが、コンソールのルールと一致していない。
> Amplify はコンソール側の設定を使うため、`amplify.yml` の記述は効いていない。整理は Phase 4 で行う。

## 5. Search Console のドメイン所有権を確認する

Search Consoleの「ドメイン」プロパティでは、DNSのTXTレコードで所有権を確かめる。

imrg.workの登録業者はお名前。com。DNSの管理はRoute 53が行う（ネームサーバーが `ns-*.awsdns-*`）。
**TXTレコードはRoute 53に追加する。お名前.com側のDNS設定に入れても効果が無い。**

1. Search Consoleで「ドメイン」プロパティを選び、`imrg.work` を入力する
2. 表示された `google-site-verification=...` の文字列をコピーする
3. AWSのコンソールで **Route 53** → **ホストゾーン** → `imrg.work` を開く
4. **レコードを作成** を押し、次のとおり入力する
   - レコード名： 空欄のまま（`imrg.work` そのものを指す）
   - レコードタイプ： `TXT`
   - 値： `"google-site-verification=コピーした文字列"`（引用符で囲む）
   - TTL： 300
5. 作成したら、手元で反映を確かめる

   ```bash
   dig +short TXT imrg.work
   ```

6. 値が返ってきたら、Search Consoleの **確認** を押す
7. 確認が通ったら、`https://imrg.work/sitemap.xml` をサイトマップとして登録する

> 反映には数分かかる。`dig` で見えるまで待ってから確認を押すと失敗しにくい。
> 既存のTXTレコードがある場合は、そのレコードに値を足す（レコードを分けない）。

> 手元の `dig` で見えないときは、権威サーバーへ直接聞く（`dig @ns-108.awsdns-13.com TXT imrg.work +short`）。
> 追加前に問い合わせていると、リゾルバは「レコード無し」を最大1日覚えている。そのため手元では見えない場合がある。

## 6. 権限を必要な範囲に絞る（TODO 0-7）

管理用ユーザーにはAdministratorAccessを付けている。運用が落ち着いたら、使う権限だけに絞る。

1. **IAM** → **ポリシー** → **ポリシーを作成** → JSONタブ
2. 次のJSONを貼る。`<ACCOUNT_ID>` などは自分の値に置き換える

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Sid": "AmplifyApp",
         "Effect": "Allow",
         "Action": "amplify:*",
         "Resource": [
           "arn:aws:amplify:ap-northeast-1:<ACCOUNT_ID>:apps/<APP_ID>",
           "arn:aws:amplify:ap-northeast-1:<ACCOUNT_ID>:apps/<APP_ID>/*"
         ]
       },
       {
         "Sid": "AmplifyList",
         "Effect": "Allow",
         "Action": ["amplify:ListApps"],
         "Resource": "*"
       },
       {
         "Sid": "Route53Zone",
         "Effect": "Allow",
         "Action": [
           "route53:ChangeResourceRecordSets",
           "route53:ListResourceRecordSets",
           "route53:GetHostedZone"
         ],
         "Resource": "arn:aws:route53:::hostedzone/<HOSTED_ZONE_ID>"
       },
       {
         "Sid": "Route53Read",
         "Effect": "Allow",
         "Action": [
           "route53:ListHostedZones",
           "route53:ListHostedZonesByName",
           "route53:GetChange"
         ],
         "Resource": "*"
       },
       {
         "Sid": "CertificateRead",
         "Effect": "Allow",
         "Action": ["acm:ListCertificates", "acm:DescribeCertificate"],
         "Resource": "*"
       },
       {
         "Sid": "BillingRead",
         "Effect": "Allow",
         "Action": [
           "billing:Get*",
           "billing:List*",
           "ce:Get*",
           "ce:Describe*",
           "ce:List*",
           "budgets:View*",
           "budgets:Describe*"
         ],
         "Resource": "*"
       },
       {
         "Sid": "CloudTrailRead",
         "Effect": "Allow",
         "Action": [
           "cloudtrail:LookupEvents",
           "cloudtrail:DescribeTrails",
           "cloudtrail:GetTrailStatus"
         ],
         "Resource": "*"
       },
       {
         "Sid": "ManageOwnCredentials",
         "Effect": "Allow",
         "Action": [
           "iam:ChangePassword",
           "iam:GetUser",
           "iam:CreateVirtualMFADevice",
           "iam:EnableMFADevice",
           "iam:ListMFADevices",
           "iam:ResyncMFADevice"
         ],
         "Resource": [
           "arn:aws:iam::<ACCOUNT_ID>:user/${aws:username}",
           "arn:aws:iam::<ACCOUNT_ID>:mfa/${aws:username}"
         ]
       }
     ]
   }
   ```

   - `<ACCOUNT_ID>`： コンソール右上のアカウントメニューに出る12桁
   - `<APP_ID>`： AmplifyのURLに含まれる `d` で始まる文字列
   - `<HOSTED_ZONE_ID>`： Route 53のホストゾーン詳細に出る `Z` で始まるID
3. 作ったポリシーを管理用ユーザーにアタッチし、AdministratorAccessは外す
4. 外したあとで、Amplifyのデプロイとレコード編集が今までどおりできるか確かめる
5. 足りない権限があれば、CloudTrailのイベント履歴で拒否されたAPIを調べて足す

> いきなり絞ると作業が止まる。Terraformを入れる前（Phase 4）までに済ませればよい。

## 7. CloudTrail を有効にする（TODO 0-8）

誰が何を操作したかを残す。直近90日は「イベント履歴」から見られるが、証跡を作ると長期保存できる。

1. **CloudTrail** → **証跡** → **証跡の作成**
2. 証跡名を決める（例： `imrg-trail`）
3. 保存先のS3バケットは新規作成でよい
4. ログファイルの検証を有効にする
5. イベントタイプは「管理イベント」だけでよい（データイベントは費用がかかる）
6. 作成後、**イベント履歴** で自分の操作が記録されるか確かめる

> 保存が増えると費用も増える。S3のライフサイクルで90日後に削除する設定を入れておくと安心。


## 8. 直したあとにやること

- Google Search Consoleの所有権確認とサイトマップ登録（2026-09-16完了）
- SNSのカード表示を確認する。X向けの検証ツールは廃止された。投稿の下書きにURLを貼るとプレビューを見られる。Facebookはシェアデバッガーで確認できる
- `docs/TODO.md` の該当項目にチェックを入れる
