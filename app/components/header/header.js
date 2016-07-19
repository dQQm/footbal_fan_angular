(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('header', directive);

    function directive() {
        var directive = {
            templateUrl: './components/header/header.html',
            restrict: 'E',
            controller: controller,
            scope: {}
        };

        return directive;
    }

    controller.$inject = ['$scope', 'conf'];
    function controller($scope, conf) {
        console.log($scope.conf);
    }

}(angular));