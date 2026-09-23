/**
 * Amy Life Guidance — LP用スクリプト
 *
 * 1. CTA（.js-cta）のリンク先を config.js の lineUrl で一括反映
 * 2. CTAタップ時に data-route に応じた定型文（鑑定希望／会員希望／VIP希望）を
 *    クリップボードへコピーし、トーストで案内（LINEへの遷移は妨げない）
 * 3. ファーストビューを過ぎたらスマホ下部の固定CTAを表示
 * 4. フッター年号
 */
(function () {
  "use strict";

  var config = window.SITE_CONFIG || {};
  var lineUrl = config.lineUrl || "#";
  var keywords = config.keywords || {};

  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text);
    }
    return new Promise(function (resolve, reject) {
      try {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.top = "-1000px";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        var ok = document.execCommand("copy");
        document.body.removeChild(ta);
        ok ? resolve() : reject(new Error("copy failed"));
      } catch (e) {
        reject(e);
      }
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var toast = document.querySelector(".toast");
    var toastTimer = null;

    function showToast(message) {
      if (!toast) return;
      toast.textContent = message;
      toast.classList.add("is-visible");
      clearTimeout(toastTimer);
      toastTimer = setTimeout(function () {
        toast.classList.remove("is-visible");
      }, 3600);
    }

    // CTAリンク反映 + 定型文コピー
    document.querySelectorAll(".js-cta").forEach(function (link) {
      link.setAttribute("href", lineUrl);
      if (/^https?:\/\//.test(lineUrl)) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
      link.addEventListener("click", function () {
        var word = keywords[link.getAttribute("data-route")];
        if (!word) return;
        copyText(word)
          .then(function () {
            showToast("「" + word + "」をコピーしました。LINEのトークに貼り付けて送信してください");
          })
          .catch(function () {
            showToast("LINEのトークで「" + word + "」と送信してください");
          });
      });
    });

    // スマホ固定CTA：ファーストビュー通過後に表示、最終CTA付近では隠す
    var bar = document.querySelector(".fixed-cta");
    var hero = document.getElementById("top");
    var finalCta = document.getElementById("apply");
    if (bar && hero && "IntersectionObserver" in window) {
      var heroVisible = true;
      var finalVisible = false;
      var update = function () {
        var show = !heroVisible && !finalVisible;
        bar.classList.toggle("is-visible", show);
      };
      new IntersectionObserver(function (entries) {
        heroVisible = entries[0].isIntersecting;
        update();
      }).observe(hero);
      if (finalCta) {
        new IntersectionObserver(function (entries) {
          finalVisible = entries[0].isIntersecting;
          update();
        }).observe(finalCta);
      }
    }

    var yearEl = document.getElementById("js-year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  });
})();
