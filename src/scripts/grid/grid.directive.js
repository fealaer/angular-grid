(function () {
  'use strict';

  angular
    .module('grid')
    .controller('GridCtrl', GridCtrl)
    .directive('grid', grid);

  function GridCtrl() {
    var vm = this;

    function init() {
      if (!vm.options.filter) {
        vm.options.filter = {};
      }

      if (!vm.options.order) {
        vm.options.order = {
          predicate: vm.options.cols[0].field,
          reverse: false
        };
      }

      vm.default = {
        filter: angular.copy(vm.options.filter),
        order: angular.copy(vm.options.order)
      };
    }

    vm.remove = function (entity) {
      var i = vm.data.indexOf(entity);
      if (~i) {
        vm.data.splice(i, 1);
      }
    };

    vm.orderBy = function (predicate) {
      var order = vm.options.order;
      order.reverse = (order.predicate === predicate) ? !order.reverse : false;
      order.predicate = predicate;
    };

    vm.resetOrder = function () {
      vm.options.order = angular.copy(vm.default.order);
    };

    vm.resetFilter = function () {
      vm.options.filter = angular.copy(vm.default.filter);
    };

    vm.isFilterable = function () {
      var filtered = vm.options.cols.filter(function (entity) {
        return entity.type === 'string' || entity.type === 'boolean';
      });
      return !!filtered.length;
    };

    vm.isSortable = function () {
      var filtered = vm.options.cols.filter(function (entity) {
        return entity.type === 'string';
      });
      return !!filtered.length;
    };

    init();
  }

  function grid() {
    return {
      restrict: 'E',
      scope: {
        data: '=',
        options: '='
      },
      controller: 'GridCtrl',
      controllerAs: 'vm',
      transclude: true,
      replace: false,
      bindToController: true,
      templateUrl: 'scripts/grid/grid.html'
    };
  }

})();
