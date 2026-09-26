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

---

# Amy Life Guidance — ランディングページ（`life-guidance/`）

単発鑑定・月額会員サービスの申込み獲得用LPです。Academy LP（ルートの `index.html`）とは独立しています。
公開URLは `https://<ドメイン>/life-guidance/` になります。

```
life-guidance/index.html     … LP本体（FV〜特商法表記まで全13セクション）
life-guidance/css/style.css  … ネイビー×シャンパンゴールド×アイボリー、モバイルファースト
life-guidance/js/config.js   … 公式LINEのURLと、各導線でコピーされるキーワード
life-guidance/js/main.js     … CTAリンク反映、キーワード自動コピー、スマホ固定CTA
life-guidance/favicon.svg    … ファビコン
```

写真はリポジトリ直下の `amy-profile.jpg` を共用しています。

## 決済ボタン（Square）

各商品の「申込み・入会」ボタン（`.js-pay`）は、`index.html` に Square 決済URLを直接設定しています。

| 商品 | 料金（税込） | ボタン文言 | 決済URL |
|---|---|---|---|
| Life Guidance 60 | 60分／22,000円 | このプランを申し込む | https://square.link/u/Ikum4wZc |
| Deep Guidance 90 | 90分／33,000円 | このプランを申し込む | https://square.link/u/ypL9axxv |
| Premium Guidance 120 | 120分／55,000円 | このプランを申し込む | https://square.link/u/OMnnD2gx |
| Amy Life Guidance Members Light | 月額3,300円 | Lightに入会する | https://square.link/u/Yx7LB1M8 |
| Amy Life Guidance Members Standard | 月額11,000円 | Standardに入会する | https://square.link/u/Y1o3yv5F |
| Amy Life Guidance Members VIP | 月額55,000円 | VIPに入会する | https://square.link/u/srHFvndy |

## 相談導線（公式LINE・3種類）

「〜について相談する」ボタン（`.js-cta`）は公式LINE「Amy Life Guidance｜人生鑑定・個別相談」（https://lin.ee/BTJRVTk）を開き、ボタンに応じたキーワードを自動でクリップボードにコピーします。

| data-route | コピーされる文言 | 用途 |
|---|---|---|
| `session` | 鑑定希望 | 単発鑑定（60分/90分/120分） |
| `member` | 会員希望 | 月額会員 Light / Standard |
| `vip` | VIP希望 | 月額会員 VIP（少人数限定） |

LINEのURLやキーワードを変える場合は `life-guidance/js/config.js` だけを書き換えてください。

## 公開前に確認いただきたい項目

- 申込み窓口：Amy Life Guidance専用公式LINE「Amy Life Guidance｜人生鑑定・個別相談」（`https://lin.ee/BTJRVTk`、`config.js` で一元管理）
- 特定商取引法に基づく表記の販売事業者名・代表者名・所在地・電話番号を、登記簿（履歴事項全部証明書）と照合
- 【保留】正式ドメイン確定後、`<head>` に `canonical` / `og:url` / `og:image`（SNSシェア用画像）を追加
- 支払方法：単発鑑定・月額会員ともクレジットカード決済（月額会員は毎月自動決済）
- Standardは「おすすめプラン」表記（「一番人気」は実績の根拠が必要なため不使用）

---

# Amy Life Guidance — English page（`life-guidance-en/`）

日本語版とは独立した英語版LPです（HTML・CSS・JS・画像はすべて `life-guidance-en/` 内に別ファイルとして保持）。

- 決済ボタン（Square）：日本語版と同じ6つの決済URL（`index.html` の `.js-pay` に直接設定）
- 相談ボタン：公式LINE `https://lin.ee/BTJRVTk`。タップ時に「English Session」をコピー（`js/config.js`）
- 特商法の英訳を掲載し、日本語版の表記を正とする旨を明記
- 日本語版ファーストビューに「English sessions available / 英語でのご相談にも対応しています」と「English Inquiry」ボタン（キーワード「English Session」）を追加

---

# Amy Life Guidance — 将来拡張の設計メモ（パワーストーン・オーダーメイド）

現時点では **EC機能・注文システム・会員機能は実装していません**。LP上には「今後のサービス（準備中）」として
`#custom-stone` セクションのみを掲載しています（日本語版・英語版とも。購入ボタン・フォームなし）。

## 将来の導線イメージ

毎日の運勢 → 詳しい個別鑑定 → 悩み・テーマに合うパワーストーン提案 → Amyによるオーダーメイド制作 → 購入・発送

## 追加しやすくするための方針（既存LPを壊さないこと）

- **ページは追加方式**：既存の `life-guidance/`（日本語）・`life-guidance-en/`（英語）は変更を最小限にし、
  新機能は別ディレクトリで追加する
  - 例：`life-guidance/stones/`（石の意味・特徴一覧）、`life-guidance/custom/`（制作依頼・注文フォーム）、
    `life-guidance/gallery/`（制作実例）。英語版は `life-guidance-en/` 配下に同じ構成で並べる
- **LPからの入口**：`#custom-stone` セクション（`data-feature="custom-stone" data-status="coming-soon"`）に
  リンク・ボタンを追加して各ページへつなぐ
- **データはコンテンツと分離**：石の名前・意味・特徴・画像・価格・送料は、将来 `data/stones.json` 等にまとめ、
  日本語/英語は同じIDで `name_ja` / `name_en` のように持つ（表示ページは共通テンプレートで生成）
- **決済**：現行どおり Square を想定（商品ごとの決済リンク、または Square のオンラインストア／API）。
  決済URLはボタン（`.js-pay`）に直接設定し、相談導線（公式LINE `.js-cta`）と混同しない
- **注文内容管理・会員マイページ**：静的サイト（GitHub Pages）の範囲を超えるため、
  Square の顧客・注文管理、または外部のフォーム／会員サービスとの連携で実装を検討する
- **表現**：天然石の効果・効能を約束する表現は使わない（景品表示法・薬機法の観点）
