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

      vm.grid1Options = {
        cols: [
          {field: 'username', type: 'string'},
          {field: 'description', type: 'string'},
          {field: 'details', type: 'string'},
          {field: 'email', type: 'string'},
          {field: 'active', type: 'boolean'},
          {field: 'locked', type: 'boolean'}
        ]
      }
    });

})();
