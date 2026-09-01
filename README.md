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
amy-profile.jpg … 講師（Akemi Watanabe / Amy）のプロフィール写真（下記「講師写真の差し替え方法」参照）
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

## 講師写真の差し替え方法

「PROFILE／講師紹介」セクションの写真は、リポジトリ直下（`index.html` と同じ階層）にある `amy-profile.jpg` を表示する設定になっています。
黒×ゴールドの二重ラインフレームで縦長（3:4）に切り抜いて表示され、横長・正方形の写真でも `object-fit: cover` により自動できれいにトリミングされます。

写真を新しいものに差し替えたい場合は、以下の手順で上書きしてください。

1. 掲載したい新しい写真を1枚用意する（横長・縦長・正方形いずれでも構いません）
2. そのファイル名を `amy-profile.jpg` にする（PNGを使う場合は `amy-profile.png` にし、`index.html` 内の拡張子も後述の通り合わせてください）
3. GitHubのリポジトリ画面（`https://github.com/aminoel0307-ship-it/amy-1p`）を開く
4. 一覧から既存の `amy-profile.jpg` をクリックして開く
5. 右上の鉛筆アイコン（Edit this file）の隣にある「...」メニュー、または削除→再アップロードの手順で新しいファイルに置き換える
   - もっとも簡単な方法: 一度 `amy-profile.jpg` を削除して commit → トップ画面の「Add file」→「Upload files」から新しい写真（ファイル名 `amy-profile.jpg`）をドラッグ＆ドロップして commit
6. （PNGファイルを使った場合のみ）`index.html` を開き、`src="amy-profile.jpg"` の部分を `src="amy-profile.png"` に書き換えて保存する
7. ページを開き直して（またはブラウザの再読み込みをして）、写真が正しく表示されることを確認する

写真の中で特に見せたい部分（顔や手など）が切り抜きで見切れてしまう場合は、`index.html` 内の `style="object-position: 62% center;"` の数値（0%〜100%、右にずらすほど数値を大きく）を調整すると、トリミング位置を左右に微調整できます。

うまく表示されない場合は、ファイル名の大文字・小文字やスペルが `amy-profile.jpg` と完全に一致しているかをご確認ください。

## 公開前に差し替え・確認いただきたい項目

- `js/config.js` の `seminarUrl`（申込みフォームの実URL）
- `index.html` 内 `<link rel="canonical">` と OGP用URL（`og:url` / `og:image` / `twitter:image`）の `https://example.com/` を本番ドメインに変更
- フッターの「プライバシーポリシー」「特定商取引法に基づく表記」「お問い合わせ」リンク（現在は仮のリンク`#`です）
- 必要に応じて `og-image.png` を正式なブランドデザインに差し替え
- 講師写真（`amy-profile.jpg`）を差し替える場合は上記「講師写真の差し替え方法」参照

## デザイン意図

- ベースカラー：黒（`#0a0a0a`）／アクセント：ゴールド・アイボリー・ホワイト
- 見出しに明朝体（Shippori Mincho）、本文にNoto Sans JPを使用し、上質・専門性のある印象に
- 講師写真以外は写真素材に頼らず、余白とタイポグラフィ、細いゴールドラインで高級感を表現
- 講師写真はゴールドの二重ラインフレームで囲んだ縦長ポートレート表示にし、ブランドトーンに馴染ませています
- スマートフォン表示を基準に設計し、768px以上でレイアウトを拡張
- FAQは `<details>/<summary>` を使用し、JS不要でアクセシブルに実装
