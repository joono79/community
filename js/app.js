var answerMeTarotApp = angular.module('answerMeTarotApp', [
  'ngRoute',
  'answerMeControllers'
]);

answerMeTarotApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'test.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
			redirectTo: '/phones'
      });
  }]);