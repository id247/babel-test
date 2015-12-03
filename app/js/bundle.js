(function() {
this.myGlobals = this.myGlobals || {};
this.myGlobalsNamed = this.myGlobalsNamed || {};
var babelHelpers = {};
babelHelpers;
(function () {
  var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };

  ;(function () {
    "use strict";

    var arr = { key: 10 };

    var func = () => {
      console.log(arr);
      arr = _extends({}, arr, {
        key: arr.key + arr.key * 2
      });
    };

    func();
    func();
    func();
  })();
}).call(this);
}).call(this);