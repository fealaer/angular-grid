(function () {
  'use strict';

  angular
    .module('grid')
    .controller('GridCtrl', GridCtrl)
    .directive('grid', grid);

  function GridCtrl() {
    var vm = this;

    function init () {
      if (!vm.options.filter) {
        vm.options.filter = {};
      }

      if (!vm.options.order) {
        vm.options.order = {
          predicate: vm.options.cols[0].field,
          reverse: false
        };
      }
    }

    vm.remove = function (entity) {
      var i = vm.data.indexOf(entity);
      if (~i) {
        vm.data.splice(i, 1);
      }
    };

    vm.orderBy = function(predicate) {
      var order = vm.options.order;
      order.reverse = (order.predicate === predicate) ? !order.reverse : false;
      order.predicate = predicate;
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
      controllerAs: 'grid',
      transclude: true,
      replace: false,
      bindToController: true,
      templateUrl: 'scripts/grid/grid.html'
    };
  }

})();
