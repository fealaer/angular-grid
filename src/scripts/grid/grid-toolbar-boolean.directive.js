(function () {
  'use strict';

  angular
    .module('grid')
    .controller('GridToolbarBooleanCtrl', GridToolbarBooleanCtrl)
    .directive('gridToolbarBoolean', gridToolbarBoolean);

  function GridToolbarBooleanCtrl() {
  }

  function gridToolbarBoolean() {
    return {
      restrict: 'A',
      require: '^grid',
      scope: {
        field: '@'
      },
      controller: 'GridToolbarBooleanCtrl',
      controllerAs: 'vm',
      bindToController: true,
      transclude: true,
      replace: true,
      templateUrl: 'scripts/grid/grid-toolbar-boolean.html'
    };
  }

})();
