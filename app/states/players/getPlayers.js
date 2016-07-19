(function (angular) {
    'use strict';

    var players = '';

    angular
        .module('app')
        .factory('getPlayers', service);

    service.$inject = ['$http', '$q'];

    function service($http, $q) {
        return {
            displayPlayers: displayPlayers,
        };
        function displayPlayers(teamName) {
            var deferred = $q.defer();
            //var  name = teamName.replace(/\s/g,'_');
                $http.get('/data/players.json')
                    .then(function(response) {
                        /*var len = response.teams.length;
                        for(let i = 0;i < len;i++){
                            if(players[i].team === name){
                                players = players[i];
                                return players;
                                break;
                        }
                    }*/

                    
                        return response;
                });


            return deferred.promise;
        }
    }





}(angular));