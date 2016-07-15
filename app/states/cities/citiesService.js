

(function (angular) {
    'use strict';

    angular
        .module('app')
        .factory('cities', service);

    service.$inject = ['$http'];

    function service($http) {
        return {
            city:cities(),
            weather:weather()
        };
    }
		function cities() {
			return [
				    {"cityName":"london", "weather":"Cloudy","temperature":"35","show":false},
				    {"cityName":"Sofia", "weather":"Sunny","temperature":"40","show":false},
				    {"cityName":"Buda Pest", "weather":"Rainny","temperature":"15","show":false}
				];
		}
		function weather() {
			return [
				    {"weather":"Cloudy", "url":"http://www.endlessicons.com/wp-content/uploads/2012/12/mostly-cloudy-icon-614x460.png"},
				    {"weather":"Sunny", "url":"http://icon-park.com/imagefiles/simple_weather_icons_sunny.png"},
				    {"weather":"Rainny", "url":"https://cdn0.iconfinder.com/data/icons/cloudy-2/425/rain-512.png"}
				];
		}
       
    


}(angular));

