'use strict';

angular.module('retrospectApp')
  .service('Lstore', function Lstore() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var hasLocalStorage = false,
      hasCheckedForLocalStorage = false,
      checkForLocalStorage = function () {
        var tst = "retrospectacular";

        if (hasCheckedForLocalStorage) {
          return hasLocalStorage;
        }

        try {
          localStorage.setItem(tst, tst);
          localStorage.removeItem(tst);
          hasLocalStorage =  true;
        } catch(e) {
          hasLocalStorage =  false;
        }
        hasCheckedForLocalStorage = true;
        return hasLocalStorage;
      }

    this.get = function (key) {
      var retval;

      if(!checkForLocalStorage()) {
        return false;
      }
      retval = localStorage.getItem(key);

      return retval && JSON.parse(retval);
    }

    this.set = function (key, value) {
      if(!checkForLocalStorage()) {
        return false;
      }
      localStorage.setItem(key, JSON.stringify(value));
    }

    this.remove = function (key) {
      if(!checkForLocalStorage()) {
        return false;
      }
      localStorage.removeItem(key);
    }
  });
