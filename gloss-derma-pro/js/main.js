(function () {
  "use strict";

  var config = window.GD_CONFIG || {};
  var isExternal = function (url) {
    return /^https?:\/\//.test(url || "");
  };

  function openInNewTab(link) {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  }

  document.addEventListener("DOMContentLoaded", function () {
    // 購入ボタン（Square）
    if (isExternal(config.purchaseUrl)) {
      document.querySelectorAll(".js-buy").forEach(function (link) {
        link.setAttribute("href", config.purchaseUrl);
        openInNewTab(link);
      });
    }

    // コース相談ボタン（LINE または 申込みURL）
    var courseUrls = {
      facial: config.facialCourseUrl,
      scalp: config.scalpCourseUrl
    };
    Object.keys(courseUrls).forEach(function (key) {
      var url = courseUrls[key];
      var ready = isExternal(url);
      document.querySelectorAll('.js-course[data-course="' + key + '"]').forEach(function (link) {
        if (ready) {
          link.setAttribute("href", url);
          openInNewTab(link);
        }
      });
      document.querySelectorAll('.js-course-note[data-course="' + key + '"]').forEach(function (note) {
        note.hidden = ready;
      });
    });

    // フッター年号
    var yearEl = document.getElementById("js-year");
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    // 画面下部の購入バー：ファーストビューを過ぎたら表示、最終CTAでは隠す
    var bar = document.querySelector(".sticky-bar");
    var hero = document.getElementById("top");
    var final = document.getElementById("start");
    if (bar && hero && "IntersectionObserver" in window) {
      var heroVisible = true;
      var finalVisible = false;
      var update = function () {
        bar.classList.toggle("is-visible", !heroVisible && !finalVisible);
      };
      new IntersectionObserver(function (entries) {
        heroVisible = entries[0].isIntersecting;
        update();
      }).observe(hero);
      if (final) {
        new IntersectionObserver(function (entries) {
          finalVisible = entries[0].isIntersecting;
          update();
        }).observe(final);
      }
    } else if (bar) {
      bar.classList.add("is-visible");
    }
  });
})();
