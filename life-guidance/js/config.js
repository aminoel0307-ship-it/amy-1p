/**
 * Amy Life Guidance — サイト共通設定
 *
 * 申込み窓口（公式LINE）のURLをここで一元管理しています。
 * URLが変わった場合は lineUrl の値だけを書き換えてください。
 * ページ内の「鑑定希望」「会員希望」「VIP希望」すべてのボタンに自動で反映されます。
 *
 * keywords … 各ボタンをタップしたときにコピーされる、LINEへ送る定型文です。
 */
window.SITE_CONFIG = {
  // 公式LINE（申込み窓口）
  lineUrl: "https://lin.ee/FCeqwRp",

  keywords: {
    session: "鑑定希望",
    member: "会員希望",
    vip: "VIP希望"
  }
};
