# GLOSS-DERMA™ PRO LP

GLOSS-DERMA™ PRO 専用の新規LP（公開パス：`/gloss-derma-pro/`）。既存LPのファイルには依存していません。

```
gloss-derma-pro/
  index.html            … LP本体
  css/style.css         … スタイル（黒×白×ゴールド／スマホファースト）
  js/config.js          … 購入URL・コース相談URLの設定
  js/main.js            … URL反映・画面下部の購入バー
  images/amy-profile.jpg… 講師写真（Akemi Watanabe）
  favicon.svg
```

## リンク設定（js/config.js）

| 項目 | ボタン | 現在値 |
|---|---|---|
| `purchaseUrl` | 今すぐ購入する／GLOSS-DERMA™ PROを購入する | https://square.link/u/SeOvSrRY |
| `facialCourseUrl` | フェイシャル開業コースを相談する | 未設定 |
| `scalpCourseUrl` | 頭皮ケア導入コースを相談する | 未設定 |

コース相談URL（公式LINE または 申込み・決済URL）を `""` の中に入れると、ページ内の該当ボタンすべてに反映されます。
未設定の間は、ボタンの下に「相談窓口は準備中」の案内が表示されます。

## 画像の追加

商品本体・フェイシャル施術・頭皮ケアの実写真が用意できたら `images/` に追加してください。
現在はリポジトリ内に GLOSS-DERMA™ PRO 関連の写真がないため、ファーストビューはCSSのエンブレム（FACE × SCALP）で構成しています。
