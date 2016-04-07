var app = angular.module('angChallenge', []);

app.controller('MainController', function($scope){


  $scope.list = [];

  $scope.makeList = function(){
    $scope.list.push($scope.listItem);
  }

  $scope.delete = function(index){
    $scope.list.splice(index,1);
  }

})
