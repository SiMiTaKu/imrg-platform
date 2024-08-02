# 推しミツ！
## Pages and routing
| page                                        | routing                  | detail                                                                                                                                                                                                                                                                 |
|---------------------------------------------|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Describe of the Oshimitsu app<br>推しミツアプリの説明 | /oshimitsu               | This page describe what is "Oshimitsu!". <br>このページでは「推しミツ！」とは何かを説明します。<br><br> Also, user can start to use this app that is searching "oshi" that is a favorite player and group.<br>またユーザーはお気に入りのチームや選手を探すこともできます。                                                    |
| Result of Searching<br>推しミツ検索結果ページ          | /oshimitsu/search_result | This page is result of the Oshimitsu app. <br> 推しミツアプリの検索結果ページです。<br><br> It shows cards those are information of all japan of groups and players. <br>全国各地のチームや選手をカードとして一覧表示します。<br><br> User can find the "oshi" scrolling this page. <br>ユーザーはスクロールしながら推しを探すことができます。 |
| Detail of the Player<br>選手の詳細ページ            | /oshimitsu/player/[id]   | This page shows detail information of a player.<br>このページは選手の詳細情報を表示します。<br>                                                                                                                                                                                            |
| Detail of the Team<br>団体の詳細ページ              | /oshimitsu/team/[id]     | This page shows detail information of a team.<br>このページはチームの詳細情報を表示します。<br>                                                                                                                                                                                             |

## Requirements
### /oshimitsu 
- Header 
- MainVisual（メインビジュアル）
  - Nice Logo and animation
  - search component（検索コンポーネント）
    - In first release, putting just search button.（最初のリリースでは、検索ボタンのみを配置します）
    - In the future, adding some search functions.（将来的には、検索機能を追加します）
- Description of Oshimitsu（推しミツの説明）
- Footer

### /oshimitsu/search_result
- Header
- Result Area
  - Card Component
    - Information
      - player
        - name（姓名）
        - nameKana（ふりがな）
        - images（画像）
        - teams（所属・出身チーム）
        - individual or group（個人or団体）
        - good at（得意なこと）
      - team
        - name（チーム名）
        - nameKana（ふりがな）
        - images（画像）
        - good at（得意なこと）
  - search component（検索コンポーネント）
    - after first release.
- Footer

### /oshimitsu/player/[id]
- Header
- Player Detail
  - Information
    - id（ID）
    - name（姓名）
    - nameKana（ふりがな）
    - teams（所属・出身チーム）
    - images（画像）
    - videos（動画）
    - individual or group（個人or団体）
    - good at（得意なこと）
    - comment（コメント）
    - history（経歴）
    - sns（SNS）
    - updated date（更新日）
    - created date（作成日）
- Footer

### /oshimitsu/team/[id]
- Header
- Team Detail
  - Information
    - id（ID）
    - name（チーム名）
    - nameKana（ふりがな）
    - images（画像）
    - good at（得意なこと）
    - comment（コメント）
    - history（経歴）
    - sns（SNS）
    - updated date（更新日）
    - created date（作成日）
- Footer

>[!NOTE]
> We have to prepare the loading view for each page.　各ページのローディングビューを準備する必要があります。
> because fetching data is started after page loading.　データ取得はページ表示後に開始されるためです。

## Data
### Player
| column name     | data type | description | example                                     |
|-----------------|-----------|-------------|---------------------------------------------|
| id              | number    | ID          | 1                                           |
| name            | string    | 姓名          | "推しミツ太郎"                                    |
| nameKana        | string    | ふりがな        | "おしみつたろう"                                   |
| birthday        | date      | 誕生日         | "2000-01-01"                                |
| performance_type | number    | 個人か団体か      | 1                                           |
| good at         | string    | 得意なこと       | "推しミツ"                                      |
| comment         | string    | コメント        | "推しミツ太郎です。よろしくお願いします。"                      |
| state           | boolean   | 公開状態        | true                                        |
| updated date    | date      | 更新日         | "2022-01-01"                                |
| created date    | date      | 作成日         | "2022-01-01"                                |

#### performance_type
| code | name    |
|------|---------|
| 1    | individual |
| 2    | group      |

### Team
| column name | data type | description | example  |
|-------------|-----------|-------------|----------|
| id          | number    | ID          | 1        |
| name        | string    | チーム名        | "推しミツチーム" |
| nameKana    | string    | ふりがな        | "おしみつちーむ" |
| good at     | string    | 得意なこと       | "推しミツ" |
| comment     | string    | コメント        | "推しミツチームです。よろしくお願いします。" |
| state | boolean | 公開状態        | true |
| updated date| date      | 更新日         | "2022-01-01" |
| created date| date      | 作成日         | "2022-01-01" |

### PlayerTeam
| column name | data type         | description | example  |
|-------------|-------------------|------------|----------|
| playerId    | number            | 選手ID       | 1        |
| teamId      | number            | チームID      | 1        |
| start_date  | date              | 開始日        | "2022-01-01" |
| end_date    | date \| undefined | 終了日       | "2022-12-31" |
| updated date| date              | 更新日        | "2022-01-01" |
| created date| date              | 作成日        | "2022-01-01" |

### PlayerHistory
| column name | data type | description | example                  |
|-----------|-----------|-------------|--------------------------|
| id        | number    | ID          | 1                        |
| playerId  | number    | 選手ID        | 1                        |
| date     | Date      | 年月日         | "2022-01-01"             |  
| description | string    | 説明          | "推しミツ太郎は2022年にデビューしました。" |
| updated date | date      | 更新日         | "2022-01-01"             |
| created date | date      | 作成日         | "2022-01-01"             |

### TeamHistory
| column name | data type | description | example                  |
|-------------|-----------|-------------|--------------------------|
| id          | number    | ID          | 1                        |
| teamId      | number    | チームID        | 1                        |
| year        | Date      | 年月日         | "2022-01-01"             |
| description | string    | 説明          | "推しミツチームは2022年にデビューしました。" |
| updated date| date      | 更新日         | "2022-01-01"             |
| created date| date      | 作成日         | "2022-01-01"             |

### PlayerSns
| column name | data type | description | example                                  |
|-------------|-----------|-------------|------------------------------------------|
| id          | number    | ID          | 1                                        |
| playerId    | number    | 選手ID       | 1                                        |
| sns_type    | number    | SNSタイプ    | 1    　                                   |
| url         | string    | URL         | "https://example.com/oshimitsu/player/1" |
| updated date| date      | 更新日       | "2022-01-01"                             |
| created date| date      | 作成日       | "2022-01-01"                             |

#### sns_type
| code | name       |
|------|------------|
| 1    | Twitter    |
| 2    | Instagram  |
| 3    | Facebook   |
| 4    | Tiktok     |
| 5    | Youtube    |

### TeamSns
| column name | data type | description | example  |
|-------------|-----------|-------------|----------|
| id          | number    | ID          | 1        |
| teamId      | number    | チームID       | 1        |
| sns_type    | number    | SNSタイプ    | 1        |
| url         | string    | URL         | "https://example.com/oshimitsu/team/1" |
| updated date| date      | 更新日       | "2022-01-01" |
| created date| date      | 作成日       | "2022-01-01" |

### PlayerVideo
| column name | data type | description | example  |
|-------------|-----------|-------------|----------|
| id          | number    | ID          | 1        |
| playerId    | number    | 選手ID       | 1        |
| url         | string    | URL         | "https://example.com/oshimitsu/player/1" |
| updated date| date      | 更新日       | "2022-01-01" |
| created date| date      | 作成日       | "2022-01-01" |

### TeamVideo
| column name | data type | description | example  |
|-------------|-----------|-------------|----------|
| id          | number    | ID          | 1        |
| teamId      | number    | チームID       | 1        |
| url         | string    | URL         | "https://example.com/oshimitsu/team/1" |
| updated date| date      | 更新日       | "2022-01-01" |
| created date| date      | 作成日       | "2022-01-01" |

> Store the image in the S3 bucket.
> 画像はS3バケットに保存します。
> url: xxxx/oshimitsu/player/[id].jpg

### PlayerImage
| column name | data type | description | example  |
|-------------|-----------|-------------|----------|
| id          | number    | ID          | 1        |
| playerId    | number    | 選手ID       | 1        |
| order       | number    | 並び順       | 1        |
| updated date| date      | 更新日       | "2022-01-01" |
| created date| date      | 作成日       | "2022-01-01" |

> Store the image in the S3 bucket.
> 画像はS3バケットに保存します。
> url: xxxx/oshimitsu/team/[id].jpg

### TeamImage
| column name | data type | description | example  |
|-------------|-----------|-------------|----------|
| id          | number    | ID          | 1        |
| teamId      | number    | チームID       | 1        |
| order       | number    | 並び順       | 1        |
| updated date| date      | 更新日       | "2022-01-01" |
| created date| date      | 作成日       | "2022-01-01" |

## Page Loading Way and Data Fetching each page

- fetching data is started when after page loading.　ページ表示後にデータ取得を開始します。
- So, we don't load data in server side rendering.　そのため、サーバーサイドレンダリングでデータをロードしません。
- We have to prepare the loading view for each page.　各ページのローディングビューを準備する必要があります。
- If the fetching data is failed, we have to show fetching again button and message that is 'Failed to fetch data. Please try again later.'　データ取得に失敗した場合、再度取得ボタンと「データの取得に失敗しました。後で再試行してください。」というメッセージを表示する必要があります。

## Future Plan
- Adding some search functions.（検索機能を追加します）
- Adding some filter functions.（フィルター機能を追加します）
- Adding some sort functions.（ソート機能を追加します）
- Adding some pagination functions.（ページネーション機能を追加します）


