(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('playersState', directive)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('players', {
                url: '/players/:teamName',
                title: 'Players',
                template: '<players-state></players-state>',
                params: {
                    teamName:null
                },
            });
    }

    function directive() {
        var directive = {
            templateUrl: './states/players/players.html',
            restrict: 'E',
            controller: controller,
            scope: {}
        };

        return directive;
    }

    controller.$inject = ['$scope', '$stateParams', 'getPlayers'];
    function controller($scope, $stateParams, getPlayers) {
            $scope.moment = moment;
            getPlayers.displayPlayers($stateParams)
                .then( function(result) {
                    $scope.players = result;
                });

   
    }
}(angular));