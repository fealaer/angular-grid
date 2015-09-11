(function () {
  'use strict';

  angular
    .module('grid')
    .controller('GridToolbarStringCtrl', GridToolbarStringCtrl)
    .directive('gridToolbarString', gridToolbarString);

  function GridToolbarStringCtrl() {
  }

  function gridToolbarString() {
    return {
      restrict: 'A',
      require: '^grid',
      scope: {
        field: '='
      },
      controller: 'GridToolbarStringCtrl',
      controllerAs: 'vm',
      bindToController: true,
      transclude: true,
      replace: true,
      templateUrl: 'scripts/grid/grid-toolbar-string.html'
    };
  }

})();
