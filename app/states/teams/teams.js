(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('teamsState', directive)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('teams', {
                url: '/teams',
                title: 'Teams',
                template: '<teams-state></teams-state>',
            });
    }

    function directive() {
        var directive = {
            templateUrl: './states/teams/teams.html',
            restrict: 'E',
            controller: controller,
            scope: {}
        };

        return directive;
    }

    controller.$inject = ['$scope', '$state', 'getteams'];
    function controller($scope, $state, getteams) {
        $scope.teams = getteams.teams;
        $scope.redirect = redirect;
        $scope.chwckWinner = checkWinner;

        function redirect(teamName) {

            //redirection to a diferent state
            $state.go('players',{teamName:teamName});
        }   
    }
}(angular));