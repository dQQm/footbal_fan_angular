(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('getPlayers', service);

    service.$inject = ['$http', '$q'];

    function service($http, $q) {
        return {
            displayPlayers: displayPlayers,
        };
        function displayPlayers(teamName) {
            var name = teamName.teamName;
            var defer = $q.defer();
            name = name.replace(/\s/g,'_');

                $http.get('/data/players.json')
                    .then(function(response) {
                        var temp = response.data.teams;
                        var res = _.filter(temp, { 'team': name})
                        _.assign(res, res[0].players);
                        console.log(res);
                        defer.resolve(res);
                    })
                    .catch(function(error) {
                        defer.reject(error);
                    });

            return defer.promise;
        }
    }





}(angular));