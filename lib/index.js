"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var clickOutSide = exports.clickOutSide = {
  mounted: function mounted(el, binding, vnode) {
    el.clickOutsideEvent = function (event) {
      if (!(el == event.target || el.contains(event.target))) {
        binding.value(event, el);
      }
    };
    document.addEventListener("click", el.clickOutsideEvent);
  },
  unmounted: function unmounted(el) {
    document.removeEventListener("click", el.clickOutsideEvent);
  }
};

exports.default = clickOutSide;