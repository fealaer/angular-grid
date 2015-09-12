(function () {
  'use strict';

  angular
    .module('common')
    .directive('focusOn', ['$timeout', focusOn]);


  function focusOn($timeout) {
    return {
      scope: {
        trigger: '=focusOn'
      },
      link: function (scope, element, attrs, vm) {
        scope.$watch('trigger', function (value) {
          if (value === true) {
            $timeout(function () {
              console.log(element[0].focus());
            }, 0, false);
          }
        });
      }
    };
  }

})();
