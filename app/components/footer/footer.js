(function (angular) {
    'use strict';

    angular
        .module('app')
        .directive('footer', directive);

    function directive() {
        var directive = {
            templateUrl: './components/footer/footer.html',
            restrict: 'E',
            controller: controller,
            scope: {}
        };

        return directive;
    }

    controller.$inject = ['$scope', 'conf'];
    function controller($scope, conf) {
    }

}(angular));