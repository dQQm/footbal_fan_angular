(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('cities', cities)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('cities', {
                url: '/cities',
                template: '<cities></cities>'
            });
    }

    function cities() {
        var directive = {
            templateUrl: './states/cities/cities.html',
            restrict: 'EA',
            controller: controller,
           scope: {}
        };

        return directive;
    }
    controller.$inject = ['$scope', 'cities'];
    function controller($scope, cities) {
        $scope.cities = cities.city;
        $scope.showTemperature = function(city) {
            city.show = !city.show;

        }

   }

}(angular));