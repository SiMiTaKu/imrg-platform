# 推しミツ！
## Directory Composition
- src
  - routes
    - oshimitsu
      - +page.svelte
      - search_result

## Pages and routing
| page                                        | routing                  | detail                                                                                                                                                                                                                                                                 |
|---------------------------------------------|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Describe of the Oshimitsu app<br>推しミツアプリの説明 | /oshimitsu               | This page describe what is "Oshimitsu!". <br>このページでは「推しミツ！」とは何かを説明します。<br><br> Also, user can start to use this app that is searching "oshi" that is a favorite player and group.<br>またユーザーはお気に入りのチームや選手を探すこともできます。                                                    |
| Result of Searching<br>推しミツ検索結果ページ          | /oshimitsu/search_result | This page is result of the Oshimitsu app. <br> 推しミツアプリの検索結果ページです。<br><br> It shows cards those are information of all japan of groups and players. <br>全国各地のチームや選手をカードとして一覧表示します。<br><br> User can find the "oshi" scrolling this page. <br>ユーザーはスクロールしながら推しを探すことができます。 |
| Detail of the Player<br>選手の詳細ページ            | /oshimitsu/player/[id]   | This page shows detail information of a player.<br>このページは選手の詳細情報を表示します。<br>                                                                                                                                                                                            |
| Detail of the Team<br>団体の詳細ページ              | /oshimitsu/team/[id]     | This page shows detail information of a team.<br>このページはチームの詳細情報を表示します。<br>                                                                                                                                                                                             |


