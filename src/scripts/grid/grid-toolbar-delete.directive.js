(function () {
  'use strict';

  angular
    .module('grid')
    .directive('gridToolbarDelete', gridToolbarDelete);

  function gridToolbarDelete() {
    return {
      restrict: 'A',
      require: '^grid',
      transclude: true,
      replace: true,
      template: '<td></td>'
    };
  }

})();
