/**
 * Amy Life Guidance — サイト共通設定
 *
 * 申込み窓口（公式LINE）のURLをここで一元管理しています。
 * URLが変わった場合は lineUrl の値だけを書き換えてください。
 * ページ内の「鑑定希望」「会員希望」「VIP希望」すべてのボタンに自動で反映されます。
 *
 * keywords … 各ボタンをタップしたときにコピーされる、LINEへ送る定型文です。
 */
/*
 * 決済（Square）のURLは index.html の各「申込み・入会」ボタン（.js-pay）に直接設定しています。
 *   Life Guidance 60（60分／22,000円）       https://square.link/u/Ikum4wZc
 *   Deep Guidance 90（90分／33,000円）       https://square.link/u/ypL9axxv
 *   Premium Guidance 120（120分／55,000円）  https://square.link/u/OMnnD2gx
 *   Members Light（月額3,300円）             https://square.link/u/Yx7LB1M8
 *   Members Standard（月額11,000円）         https://square.link/u/Y1o3yv5F
 *   Members VIP（月額55,000円）              https://square.link/u/srHFvndy
 * 下の lineUrl は「〜について相談する」ボタン（.js-cta）専用です。決済URLと混同しないでください。
 */
window.SITE_CONFIG = {
  // 公式LINE（申込み窓口）
  lineUrl: "https://lin.ee/BTJRVTk",
  // 公式LINE名称：Amy Life Guidance｜人生鑑定・個別相談

  keywords: {
    session: "鑑定希望",
    member: "会員希望",
    vip: "VIP希望"
  }
};
