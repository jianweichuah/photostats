angular.module('photostatsApp', [
  'ngRoute',
  'photostatsApp.controllers.main'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/main.html'
    })
    .when('/profile', {
      templateUrl: 'templates/profile.html'
    })
    .otherwise({
      redirectTo: '/'
    });
  }
]);
