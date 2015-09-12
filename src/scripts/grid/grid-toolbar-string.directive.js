(function () {
  'use strict';

  angular
    .module('grid')
    .controller('GridToolbarStringCtrl', GridToolbarStringCtrl)
    .directive('gridToolbarString', gridToolbarString);

  function GridToolbarStringCtrl() {
    var vm = this;

    function init () {
      if (!vm.filter[vm.options.field]) {
        vm.filter[vm.options.field] = '';
      }

      vm.local = {
        get filter () {
          return vm.filter[vm.options.field];
        },
        set filter (str) {
          vm.filter[vm.options.field] = str;
        }
      };
    }

    vm.isOrderedByThis = function () {
      return vm.order.predicate === vm.options.field;
    };

    vm.isReversed = function () {
      return vm.order.reverse;
    };

    vm.buttonIconClass = function () {
      if (vm.isOrderedByThis()) {
        return vm.isReversed() ? 'glyphicon-sort-by-attributes-alt' : 'glyphicon-sort-by-attributes';
      } else {
        return 'glyphicon-sort';
      }
    };

    vm.buttonColorClass = function () {
      return vm.isOrderedByThis() ? 'btn-info' : 'btn-default';
    };

    vm.isFilterEmpty = function () {
      return !!vm.local.filter;
    };

    vm.inputColorClass = function () {
      return vm.isFilterEmpty() ? 'input-info' : '' ;
    };

    init();
  }

  function gridToolbarString() {
    return {
      restrict: 'A',
      require: '^grid',
      scope: {
        options: '=',
        filter: '=',
        order: '='
      },
      controller: 'GridToolbarStringCtrl',
      controllerAs: 'vm',
      bindToController: true,
      transclude: true,
      replace: true,
      templateUrl: 'scripts/grid/grid-toolbar-string.html',
      link: function (scope, element, attrs, vm) {
        scope.vm.setOrder = function () {
          vm.orderBy(scope.vm.options.field);
        };
      }
    };
  }

})();
