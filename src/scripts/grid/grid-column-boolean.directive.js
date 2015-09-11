(function () {
  'use strict';

  angular
    .module('grid')
    .controller('GridColumnBooleanCtrl', GridColumnBooleanCtrl)
    .directive('gridColumnBoolean', gridColumnBoolean);

  function GridColumnBooleanCtrl() {
    var vm = this;

    vm.toggleValue = function () {
      vm.entity[vm.options.field] = !vm.entity[vm.options.field];
    }
  }

  function gridColumnBoolean() {
    return {
      restrict: 'A',
      require: '^grid',
      scope: {
        entity: '=',
        options: '='
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
