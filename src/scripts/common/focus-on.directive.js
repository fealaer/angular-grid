(function () {
  'use strict';

  angular
    .module('common')
    .directive('focusOn', ['$timeout', focusOn]);

  function focusOn($timeout) {
    return {
      restrict: "A",
      scope: {
        trigger: '=focusOn'
      },
      link: function (scope, element, attrs, vm) {
        scope.$watch('trigger', function (value) {
          if (value === true) {
            $timeout(function () {
              element[0].focus();
            }, 0, false);
          }
        });
      }
    };
  }

})();
