angular.module('zatiqctrl.controllers')

.controller('MainCtrl', function($scope,$ionicActionSheet) {

    
    $scope.showActionSheet1 = function() {
        var hideSheet = $ionicActionSheet.show({
     buttons: [
       { text: 'Add Review' },
       { text: 'Add Rating' },
       { text: 'Check In' }
     ],
//     destructiveText: 'Close',
//     destructiveButtonClicked: function() {
//        
//     },
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