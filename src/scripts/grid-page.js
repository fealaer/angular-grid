(function () {
  'use strict';

  angular
    .module('gridPage', ['grid'])
    .controller('GridPageCtrl', function () {
      var vm = this;
      vm.data = [
        {
          username: 'Peter parker',
          description: 'The Spider-man! My good friend!',
          details: 'Superhero mutant',
          email: 'spider-man@email.com',
          active: true,
          locked: false
        },
        {
          username: 'Henry McCoy',
          description: 'Beast',
          details: 'X-Men',
          email: 'beast@xmen.com',
          active: false,
          locked: true
        },
        {
          username: 'James \'Logan\' Howlett',
          description: 'Wolverine',
          details: 'X-Men',
          email: 'wolverine@xmen.com',
          active: false,
          locked: true
        },
        {
          username: 'Scott Summers',
          description: 'Cyclops',
          details: 'X-Men',
          email: 'cyclops@xmen.com',
          active: true,
          locked: false
        },
        {
          username: 'Jean Grey',
          description: 'Phoenix',
          details: 'X-Men',
          email: 'jean.grey@xmen.com',
          active: false,
          locked: true
        }
      ];

      var descriptionValidator = function (val) {
        return Math.random() <= 0.8;
      };

      var detailsValidator = function (val) {
        return val.toLowerCase() !== 'fuck';
      };

      var emailValidator = function (val) {
        return ~val.indexOf('@');
      };

      vm.grid1Options = {
        name: 'Grid #1',
        cols: [
          {field: 'username', type: 'string'},
          {field: 'description', type: 'string', editable: true, validator: descriptionValidator},
          {field: 'details', type: 'string', editable: true, validator: detailsValidator},
          {field: 'email', type: 'string', editable: true, validator: emailValidator},
          {field: 'active', type: 'boolean', editable: true, filterable: false},
          {field: 'locked', type: 'boolean', editable: true}
        ]
      };

      vm.grid2Options = {
        name: 'Grid #2',
        cols: [
          {field: 'username', type: 'string', filterable: false},
          {field: 'email', type: 'string', sortable: false},
          {field: 'delete', type: 'delete'}
        ]
      };
    });

})();
