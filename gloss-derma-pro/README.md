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
| `facialCourseUrl` | フェイシャル開業コースを相談する | https://lin.ee/C0byPWO（公式LINE） |
| `scalpCourseUrl` | 頭皮ケア導入コースを相談する | https://lin.ee/C0byPWO（公式LINE） |

コース相談URLを変更する場合は `js/config.js` を書き換えると、ページ内の該当ボタンすべてに反映されます。

## 画像の追加

商品本体・フェイシャル施術・頭皮ケアの実写真が用意できたら `images/` に追加してください。
現在はリポジトリ内に GLOSS-DERMA™ PRO 関連の写真がないため、ファーストビューはCSSのエンブレム（FACE × SCALP）で構成しています。
