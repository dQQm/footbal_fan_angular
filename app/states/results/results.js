(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('resultsState', directive)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('results', {
                url: '/results',
                title: 'Results',
                template: '<results-state></results-state>'
            });
    }

    function directive() {
        var directive = {
            templateUrl: './states/results/results.html',
            restrict: 'E',
            controller: controller,
            scope: {}
        };

        return directive;
    }

    controller.$inject = ['$scope', 'getResults'];
    function controller($scope, getResults) {
        $scope.score = getResults.result;
        $scope.checkWinner = checkWinner;

        function checkWinner(team1, team2) {
            console.log('team1'+team1)
            if(team1 === team2) {
                return 'neutral';
            } else if(team1 > team2) {
                return 'winner';
            }else {
                return 'loser';
            }
        }

    }   
}(angular));

        
