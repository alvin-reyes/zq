'use strict';
angular.module('zatiqctrl.controllers')

.controller('CheckinCtrl', function($scope) {
    $scope.init = function(){
         $ionicLoading.show({
              template: 'Loading...'
        }).then(function(){
           console.log("The loading indicator is now displayed");
        });
    }
});