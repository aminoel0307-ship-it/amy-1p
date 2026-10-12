(function () {
  "use strict";

  var config = window.GMWBA_CONFIG || {};
  var ctaUrl = config.ctaUrl || "#";
  var isEn = document.documentElement.lang === "en";
  var defaultMessage = isEn ? "Contact" : config.defaultMessage || "お問い合わせ";

  var TEXT = isEn
    ? {
        copied: function (m) { return "Copied “" + m + "”. Paste it into LINE and send."; },
        copiedShort: "Copied. Open LINE and paste it.",
        failed: "Could not copy. Please long-press the text above to copy it."
      }
    : {
        copied: function (m) { return "「" + m + "」をコピーしました。LINEに貼り付けて送ってください"; },
        copiedShort: "コピーしました。LINEを開いて貼り付けてください",
        failed: "コピーできませんでした。上の文字を長押しでコピーしてください"
      };

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
        ok ? resolve() : reject(new Error("execCommand copy failed"));
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
      }, 3200);
    }

    // CTA：リンク先を公式LINEに統一し、タップ時に相談内容の定型文を自動コピー（遷移は妨げない）
    document.querySelectorAll(".js-cta").forEach(function (link) {
      var message = link.getAttribute("data-line-message") || defaultMessage;
      link.setAttribute("href", ctaUrl);
      if (/^https?:\/\//.test(ctaUrl)) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
      link.addEventListener("click", function () {
        copyText(message)
          .then(function () { showToast(TEXT.copied(message)); })
          .catch(function () {});
      });
    });

    // LINEメッセージ例の「コピー」ボタン
    document.querySelectorAll(".js-copy").forEach(function (btn) {
      btn.addEventListener("click", function () {
        copyText(btn.getAttribute("data-copy") || defaultMessage)
          .then(function () { showToast(TEXT.copiedShort); })
          .catch(function () { showToast(TEXT.failed); });
      });
    });

    // スマホ下部の追従CTA：ファーストビューを過ぎたら表示
    var sticky = document.querySelector(".sticky-cta");
    var hero = document.querySelector(".hero");
    if (sticky && hero && "IntersectionObserver" in window) {
      new IntersectionObserver(function (entries) {
        sticky.classList.toggle("is-visible", !entries[0].isIntersecting);
      }).observe(hero);
    }

    var yearEl = document.getElementById("js-year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  });
})();
