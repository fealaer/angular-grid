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
    }

    vm.remove = function (entity) {
      var i = vm.data.indexOf(entity);
      if (~i) {
        vm.data.splice(i, 1);
      }
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
