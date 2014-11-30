var answerMeTarotApp = angular.module('answerMeTarotApp', [
  'ngRoute',
  'answerMeControllers'
]);

answerMeTarotApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/phones', {
        templateUrl: 'http://answermetarot.2jmsoft.com/test.html',
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