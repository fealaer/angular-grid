(function () {
  'use strict';

  angular
    .module('grid')
    .controller('GridToolbarCtrl', GridToolbarCtrl)
    .directive('gridToolbar', ['$compile', gridToolbar]);

  function GridToolbarCtrl() {
  }

  function gridToolbar($compile) {
    return {
      restrict: 'A',
      scope: {
        options: '='
      },
      controller: 'GridToolbarCtrl',
      controllerAs: 'vm',
      link: link,
      transclude: true,
      replace: false,
      bindToController: true
    };

    function link (scope, element, attr, vm) {
      var template = '<td grid-toolbar-' + vm.options.type + ' field="' + vm.options.field + '"></div>';
      element.replaceWith($compile(template)(scope));
    }
  }

})();

