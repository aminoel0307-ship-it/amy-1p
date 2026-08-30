# Amy Salon Business Academy — ランディングページ

「Amy Salon Business Academy」の無料セミナー・説明会申込みを獲得するための、日本語1ページ完結型LPです。
ビルドツールを使わない、静的HTML/CSS/JSのシンプルな構成です。

## 構成

```
index.html      … LP本体（全12セクション、SEO/OGPメタタグ込み）
css/style.css   … スタイル（黒×ゴールド×アイボリー、モバイルファースト）
js/config.js    … CTAリンク先の設定（ここを書き換えるだけでOK）
js/script.js    … CTAリンクの反映など最小限のJS
favicon.svg     … ファビコン
og-image.png    … OGP/SNSシェア用画像（1200×630）
```

## ローカルでの表示確認

ビルド不要です。任意の簡易サーバーで配信して確認してください。

```bash
cd amy-1p
python3 -m http.server 8000
```

ブラウザで `http://localhost:8000/` を開いてください。
（`index.html` を直接ダブルクリックして開いても表示は確認できますが、簡易サーバー経由の方がフォント読み込み等の挙動が本番に近くなります）

## 無料セミナー・説明会への申込みリンクの変更方法

`js/config.js` の `seminarUrl` の値を、実際の申込みフォームURLに書き換えるだけで、
ページ内すべての「無料セミナー・説明会に参加する」ボタンのリンク先が一括で更新されます。

```js
window.SITE_CONFIG = {
  seminarUrl: "https://forms.gle/xxxxxxxxx" // ここを変更
};
```

## 公開前に差し替え・確認いただきたい項目

- `js/config.js` の `seminarUrl`（申込みフォームの実URL）
- `index.html` 内 `<link rel="canonical">` と OGP用URL（`og:url` / `og:image` / `twitter:image`）の `https://example.com/` を本番ドメインに変更
- フッターの「プライバシーポリシー」「特定商取引法に基づく表記」「お問い合わせ」リンク（現在は仮のリンク`#`です）
- 必要に応じて `og-image.png` を正式なブランドデザインに差し替え

## デザイン意図

- ベースカラー：黒（`#0a0a0a`）／アクセント：ゴールド・アイボリー・ホワイト
- 見出しに明朝体（Shippori Mincho）、本文にNoto Sans JPを使用し、上質・専門性のある印象に
- 写真素材に頼らず、余白とタイポグラフィ、細いゴールドラインで高級感を表現
- スマートフォン表示を基準に設計し、768px以上でレイアウトを拡張
- FAQは `<details>/<summary>` を使用し、JS不要でアクセシブルに実装
