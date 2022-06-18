"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var onPageVideo = exports.onPageVideo = {
  inserted: function inserted(el) {

    var hidden, visibilityChange;
    if (typeof document.hidden !== "undefined") {
      // Opera 12.10 and Firefox 18 and later support
      hidden = "hidden";
      visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
      hidden = "msHidden";
      visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
      hidden = "webkitHidden";
      visibilityChange = "webkitvisibilitychange";
    }

    el.onPageVideo = function (event) {
      if (document[hidden]) {
        el.pause();
      } else {
        el.play();
      }
    };

    // Warn if the browser doesn't support addEventListener or the Page Visibility API
    if (typeof document.addEventListener === "undefined" || hidden === undefined) {
      console.log("This demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
    } else {
      // Handle page visibility change
      document.addEventListener(visibilityChange, el.onPageVideo, false);
    }
  }
};

exports.default = onPageVideo;