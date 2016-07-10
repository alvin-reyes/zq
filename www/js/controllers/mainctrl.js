angular.module('zatiqctrl.controllers')

.controller('MainCtrl', function($scope,$ionicActionSheet) {

    
    $scope.showActionSheet1 = function() {
        var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: 'Btn1- Like This' },
       { text: 'Btn2- Comment' }
     ],
     destructiveText: 'Delete',
     titleText: 'Edit Profile',
     cancelText: 'Cancel',
     cancel: function() {
          // add cancel code..
        },
     buttonClicked: function(index) {
       if(index === 0){
	   // code for button 1 
	   }
	   if(index === 1){
	     // code for button 2
	   }
     }
    });


  };
    
    
});