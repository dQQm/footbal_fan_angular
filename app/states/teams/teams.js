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

    controller.$inject = ['$scope', 'getteams'];
    function controller($scope, getteams) {
        console.log(getteams);
        $scope.teams = getteams.teams;
        function redirect(teamName) {
            $state.go('players',{teamName:teamName});
        }   
    }
}(angular));