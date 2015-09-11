(function () {
  'use strict';

  angular
    .module('grid')
    .controller('GridColumnStringCtrl', GridColumnStringCtrl)
    .directive('gridColumnString', gridColumnString);

  function GridColumnStringCtrl() {
    var vm = this;
    vm.value = vm.entity[vm.options.field];
  }

  function gridColumnString() {
    return {
      restrict: 'A',
      require: '^grid',
      scope: {
        entity: '=',
        options: '='
      },
      controller: 'GridColumnStringCtrl',
      controllerAs: 'vm',
      bindToController: true,
      transclude: true,
      replace: true,
      templateUrl: 'scripts/grid/grid-column-string.html'
    };
  }

})();
