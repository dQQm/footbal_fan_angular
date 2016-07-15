(function (angular) {
    'use strict';

    var teams = [];

    angular
        .module('app')
        .factory('getteams', service);

    service.$inject = ['$http'];

    function service($http) {
        getTeams();
        return {
            teams: teams,
        };

        function getTeams() {
            $http({
                headers: {
                'X-Auth-Token': '825dbab35fe94c798367d5545f987daf'
                },
                methood: 'GET',
                url: 'http://api.football-data.org/v1/soccerseasons/424/teams',
            }).then(function successCallback(response) {
                    _.assign(teams, response.data.teams);
            }, function errorCallback(response) {
                console.log("error"+response);
            });
        }
    }

   
        
}(angular));
