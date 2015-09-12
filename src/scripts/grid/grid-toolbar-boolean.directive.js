(function () {
  'use strict';

  angular
    .module('grid')
    .controller('GridToolbarBooleanCtrl', GridToolbarBooleanCtrl)
    .directive('gridToolbarBoolean', gridToolbarBoolean);

  function GridToolbarBooleanCtrl() {
    var vm = this;

    vm.isFieldEqualTo = function (value) {
      return vm.filter[vm.options.field] === value;
    };

    vm.setFilter = function (value) {
      if (vm.isFieldEqualTo(value)) {
        delete vm.filter[vm.options.field];
      } else {
        vm.filter[vm.options.field] = value;
      }
    };

    vm.buttonColorClass = function (value, buttonClass) {
      return vm.isFieldEqualTo(value) ? buttonClass : 'btn-default';
    };
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
