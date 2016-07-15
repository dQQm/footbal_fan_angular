(function (angular) {
    'use strict';

    var result = [];

    angular
        .module('app')
        .factory('getResults', service);

    service.$inject = ['$http'];

    function service($http) {
        getResults();
        return {
            result: result,
        };

        function getResults() {
            $http({
                headers: {
                'X-Auth-Token': '825dbab35fe94c798367d5545f987daf'
                },
                methood: 'GET',
                url: 'http://api.football-data.org/v1/soccerseasons/424/fixtures',
            }).then(function successCallback(response) {
                    _.assign(result, response.data);
            }, function errorCallback(response) {
                console.log("error"+response);
            });
        }
    }

   
        
}(angular));
