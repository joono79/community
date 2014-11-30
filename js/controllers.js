var answerMeControllers = angular.module('answerMeControllers', []);

answerMeControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones.json').success(function(data) {
      $scope.phones = data;
    });

    $scope.orderProp = 'age';
  }]);

answerMeControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);
  
  
answerMeControllers.controller('TestCtrl', ['$scope', '$routeParams',
  function($scope, $routeParams) {
    $scope.name = "¾ßÈ£";
  }]);