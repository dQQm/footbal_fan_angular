(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('fanZone', directive)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('fanZone', {
                url: '/fanZone',
                title: 'Fan Zone',
                template: '<fan-zone></fan-zone>'
            });
    }

    function directive() {
        var directive = {
            templateUrl: './states/fan_zone/fanZone.html',
            restrict: 'E',
            scope: {}
        };

        return directive;
    }
}(angular));