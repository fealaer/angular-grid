(function () {
  'use strict';

  angular
    .module('grid')
    .controller('GridCtrl', GridCtrl)
    .directive('grid', grid);

  function GridCtrl() {
  }

  function grid() {
    return {
      restrict: 'E',
      scope: {
        data: '=',
        options: '='
      },
      controller: 'GridCtrl',
      controllerAs: 'grid',
      transclude: true,
      replace: false,
      bindToController: true,
      templateUrl: 'scripts/grid/grid.html'
    };
  }

})();
