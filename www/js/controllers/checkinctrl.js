'use strict';
angular.module('zatiqctrl.controllers')

.controller('CheckinCtrl', function($scope,$ionicPopup) {
    
    $scope.showCheckinPopup();
    $scope.showCheckinPopup = function() {
        
        var myPopup = $ionicPopup.show({
        template: '<input type="password" ng-model="data.wifi">',
        title: 'Enter Wi-Fi Password',
        subTitle: 'Please use normal things',
        scope: $scope,
        buttons: [
          { text: 'Cancel' },
          {
            text: '<b>Save</b>',
            type: 'button-positive',
            onTap: function(e) {
              if (!$scope.data.wifi) {
                //don't allow the user to close unless he enters wifi password
                e.preventDefault();
              } else {
                return $scope.data.wifi;
              }
            }
          }
        ]
        });
    }
    
    
    $scope.init = function(){
         $ionicLoading.show({
              template: 'Loading...'
        }).then(function(){
           console.log("The loading indicator is now displayed");
        });
    }
});