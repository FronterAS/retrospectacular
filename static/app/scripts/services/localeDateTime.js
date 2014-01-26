'use strict';

angular.module('retrospectApp')
  .service('LocaleDateTime', function LocaleDateTime() {
      var hasLocaleStringSupport = false,
          hasCheckedForLocaleStringSupport = false,
          checkForLocaleStringSupport = function () {
              if (hasCheckedForLocaleStringSupport) {
                  return hasLocaleStringSupport;
              }
              try {
                  new Date().toLocaleString("i");
              } catch (e) {
                  hasLocaleStringSupport = (e.name === "RangeError");
              }
              hasCheckedForLocaleStringSupport = true;
              return hasLocaleStringSupport;
          };

      this.localizeResults = function(results) {
          results.forEach(function(result, index) {
              if(!checkForLocaleStringSupport()) {
                  return;
              }
              result.createdAt = new Date(result.createdAt).toLocaleString("en-gb");
              results[index] = result;
          });
          return results;
      }

  });
