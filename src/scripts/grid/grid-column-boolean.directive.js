(function () {
  'use strict';

  angular
    .module('grid')
    .controller('GridColumnBooleanCtrl', GridColumnBooleanCtrl)
    .directive('gridColumnBoolean', gridColumnBoolean);

  function GridColumnBooleanCtrl() {
    var vm = this;
    vm.value = vm.entity[vm.field];
  }

  function gridColumnBoolean() {
    return {
      restrict: 'A',
      require: '^grid',
      scope: {
        entity: '=',
        field: '@'
      },
      controller: 'GridColumnBooleanCtrl',
      controllerAs: 'vm',
      bindToController: true,
      transclude: true,
      replace: true,
      templateUrl: 'scripts/grid/grid-column-boolean.html'
    };
  }

})();