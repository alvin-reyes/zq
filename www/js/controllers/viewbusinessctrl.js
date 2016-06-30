angular.module('zatiqctrl.controllers')

.controller('ViewBusinessCtrl', function($scope,$ionicLoading,selectedfactory) {
    $scope.selectedBusiness;
    $scope.init = function() {
         $ionicLoading.show({
              template: 'Loading...'
        }).then(function(){
             console.log(selectedfactory.getSelectedBusines());
           console.log("The loading indicator is now displayed");
        });
        $scope.selectedBusiness =selectedfactory.getSelectedBusines();
        //  Load map.
        //  Load Coordinates.
        $ionicLoading.hide();
    }
});