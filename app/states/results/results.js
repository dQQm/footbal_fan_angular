(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('resultState', directive)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('result', {
                url: '/results',
                title: 'Result',
                template: '<result-state></result-state>'
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
    controller.$inject = ['$scope', 'getResult'];
    function controller($scope, getResult) {
        console.log(getResult);
        $scope.teams = getteams.teams;
        }   
    }
}(angular));