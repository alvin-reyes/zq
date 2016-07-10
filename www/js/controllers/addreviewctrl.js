angular.module('zatiqctrl.controllers')

.controller('AddReviewCtrl', function($scope,$ionicLoading,$ionicModal) {
    
    $scope.selectedBusiness;
    $scope.init = function(){
    $ionicLoading.show({
        template: 'Loading...'
        }).then(function(){
           console.log("The loading indicator is now displayed");
        });
    }
    
  $scope.ratingsObject = {
        iconOn: 'ion-ios-star',    //Optional
        iconOff: 'ion-ios-star-outline',   //Optional
        iconOnColor: 'rgb(200, 200, 100)',  //Optional
        iconOffColor:  'rgb(200, 100, 100)',    //Optional
        rating:  -1, //Optional
        minRating: -1,    //Optional
        readOnly: true, //Optional
        callback: function(rating) {    //Mandatory
          $scope.ratingsCallback(rating);
        }
  };

  $scope.ratingsCallback = function(rating) {
    console.log('Selected rating is : ', rating);
  };
    
    
});