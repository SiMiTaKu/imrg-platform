# 推しミツ！（ブレスト時）
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
  - card
    - スクロール
    - summary
      - Tag
        - group
        - individual
        - interview（将来の夢）
      - name
      - video auto start
- Footer

### /oshimitsu/player/[id]
- 将来の夢

### /oshimitsu/team/[id]
- 将来の夢


## Data
### Player
| column name     | data type | description | example                                     |
|-----------------|-----------|-------------|---------------------------------------------|
| id              | number    | ID          | 1                                           |
| name            | string    | 姓名          | "推しミツ太郎"                                    |
| nameKana        | string    | ふりがな        | "おしみつたろう"                                   |
 | teamId | number | チームID | 1 |

### Team
| column name | data type | description | example  |
|-------------|-----------|-------------|----------|
| id          | number    | ID          | 1        |
| name        | string    | チーム名        | "推しミツチーム" |
| nameKana    | string    | ふりがな        | "おしみつちーむ" |

### Video
| column name | data type | description | example  |
|-------------|-----------|-------------|----------|
| id          | number    | ID          | 1        |
| playerId    | number    | 選手ID       | 1        |
| url         | string    | URL         | "https://example.com/oshimitsu/player/1" |

### TeamVideo
| column name | data type | description | example  |
|-------------|-----------|-------------|----------|
| id          | number    | ID          | 1        |
| teamId      | number    | チームID       | 1        |
| url         | string    | URL         | "https://example.com/oshimitsu/team/1" |
