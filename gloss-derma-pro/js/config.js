/**
 * GLOSS-DERMA™ PRO LP — サイト共通設定
 *
 * ■ 購入リンク（Square）
 *   「今すぐ購入する」「GLOSS-DERMA™ PROを購入する」ボタン（.js-buy）は
 *   index.html に Square の URL を直接記載しています（JSが動かない環境でも購入可能）。
 *   ここの purchaseUrl を変更すると、すべての購入ボタンに上書き反映されます。
 *
 * ■ コース相談リンク（LINE または 申込み・決済URL）
 *   facialCourseUrl … 「フェイシャル開業コースを相談する」ボタン（data-course="facial"）
 *   scalpCourseUrl  … 「頭皮ケア導入コースを相談する」ボタン（data-course="scalp"）
 *   現在は公式LINE（https://lin.ee/FCeqwRp）に接続しています。index.html にも同じURLを直接記載済みです。
 *   申込み・決済URLなどに変える場合は、ここを書き換えるとページ内の該当ボタンすべてに反映されます。
 */
window.GD_CONFIG = {
  // GLOSS-DERMA™ PRO 本体（55,000円・税込）
  purchaseUrl: "https://square.link/u/SeOvSrRY",

  // フェイシャルサロン開業コース（合計275,000円・税込）の相談・申込み先
  facialCourseUrl: "https://lin.ee/FCeqwRp",

  // 頭皮ケア導入コース（合計132,000円・税込）の相談・申込み先
  scalpCourseUrl: "https://lin.ee/FCeqwRp"
};
