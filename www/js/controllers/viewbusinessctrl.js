angular.module('zatiqctrl.controllers')

.controller('ViewBusinessCtrl', function($scope,$ionicLoading,$cordovaGeolocation,$ionicScrollDelegate,selectedfactory) {

    $scope.$on("$ionicView.beforeEnter", function(event, data){
        $ionicScrollDelegate.scrollTop();
        $scope.init();
    });
    
    $scope.reviews = [
        {id:'0',user:'Alvin Reyes','review':'yehey','rating':'4.5'},
        {id:'0',user:'Alvin Reyes','review':'yehey','rating':'4.5'},
    ];
    
    $scope.selectedBusiness;
    $scope.map;
    var options = {timeout: 10000, enableHighAccuracy: true};
    $scope.init = function() {
         $ionicLoading.show({
              template: 'Loading...'
        }).then(function(){
            console.log(selectedfactory.getSelectedBusiness().name);
            console.log("The loading indicator is now displayed");
        });
        console.log(selectedfactory.getSelectedBusiness().name);
        $scope.selectedBusiness = selectedfactory.getSelectedBusiness();
        var latLng = new google.maps.LatLng($scope.selectedBusiness.geometry.location.lat(), $scope.selectedBusiness.geometry.location.lng());
        var mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        console.log(">>>");
        $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
        console.log(">>>");
        google.maps.event.addListenerOnce($scope.map, 'idle', function(){
          var marker = new google.maps.Marker({
              map: $scope.map,
              animation: google.maps.Animation.DROP,
              position: latLng
          });      

        });
        $ionicLoading.hide();
    }
});