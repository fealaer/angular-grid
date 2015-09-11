(function () {
  'use strict';

  angular
    .module('grid')
    .controller('GridColumnStringCtrl', GridColumnStringCtrl)
    .directive('gridColumnString', gridColumnString);

  function GridColumnStringCtrl() {
    var vm = this;
    vm.value = vm.entity[vm.field];
  }

  function gridColumnString() {
    return {
      restrict: 'A',
      require: '^grid',
      scope: {
        entity: '=',
        field: '@',
        editable: '='
      },
      controller: 'GridColumnStringCtrl',
      controllerAs: 'vm',
      bindToController: true,
      transclude: true,
      replace: false,
      templateUrl: 'scripts/grid/grid-column-string.html'
    };
  }

})();
