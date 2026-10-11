(function () {
  "use strict";

  var config = window.GMWBA_CONFIG || {};
  var ctaUrl = config.ctaUrl || "#";
  var lineMessage = config.lineMessage || "GMWBA";

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

    document.querySelectorAll(".js-line-message").forEach(function (el) {
      el.textContent = lineMessage;
    });

    // CTAリンク先を反映し、タップ時に定型文を自動コピー（遷移は妨げない）
    document.querySelectorAll(".js-cta").forEach(function (link) {
      link.setAttribute("href", ctaUrl);
      if (/^https?:\/\//.test(ctaUrl)) {
        link.setAttribute("target", "_blank");
        link.setAttribute("rel", "noopener noreferrer");
      }
      link.addEventListener("click", function () {
        copyText(lineMessage)
          .then(function () {
            showToast("「" + lineMessage + "」をコピーしました。LINEに貼り付けて送ってください");
          })
          .catch(function () {});
      });
    });

    document.querySelectorAll(".js-copy-line-message").forEach(function (btn) {
      btn.addEventListener("click", function () {
        copyText(lineMessage)
          .then(function () {
            showToast("コピーしました。LINEを開いて貼り付けてください");
          })
          .catch(function () {
            showToast("コピーできませんでした。上の文字を長押しでコピーしてください");
          });
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
