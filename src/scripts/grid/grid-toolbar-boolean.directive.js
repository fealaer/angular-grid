(function () {
  'use strict';

  angular
    .module('grid')
    .controller('GridToolbarBooleanCtrl', GridToolbarBooleanCtrl)
    .directive('gridToolbarBoolean', gridToolbarBoolean);

  function GridToolbarBooleanCtrl() {
    var vm = this;

    vm.isEqualTo = function (value) {
      return vm.filter[vm.options.field] === value;
    };

    vm.setFilter = function (value) {
      if (vm.isEqualTo(value)) {
        delete vm.filter[vm.options.field];
      } else {
        vm.filter[vm.options.field] = value;
      }
    }
  }

  function gridToolbarBoolean() {
    return {
      restrict: 'A',
      require: '^grid',
      scope: {
        options: '=',
        filter: '='
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
