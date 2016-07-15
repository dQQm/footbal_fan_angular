(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('homeState', directive)
        .config(config);

    config.$inject = ['$stateProvider'];
    function config($stateProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                title: 'Home',
                template: '<home-state></home-state>'
            });
    }

    function directive() {
        var directive = {
            templateUrl: './states/home/home.html',
            restrict: 'E',
            controller: controller,
            scope: {}
        };

        return directive;
    }
}(angular));