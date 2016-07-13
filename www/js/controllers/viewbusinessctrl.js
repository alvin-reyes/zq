angular.module('zatiqctrl.controllers')

.controller('ViewBusinessCtrl', function ($scope,$state, $ionicPopup,$ionicLoading, $cordovaGeolocation, $ionicScrollDelegate, selectedfactory) {

    $scope.$on("$ionicView.beforeEnter", function (event, data) {
        $ionicScrollDelegate.scrollTop();
        $scope.init();
    });

    $scope.addReview = function() {
        $state.go('zblk.addreview');
    }
    
    $scope.addPhotoVideo = function() {
        $state.go('zblk.addphotovideo');
    }
    
    $scope.checkin = function() {
        $state.go('zblk.checkin');
    }
    
    $scope.reviews = [
        {
            id: '0'
            , user: 'Alvin Reyes'
            , 'review': 'yehey'
            , 'rating': '4.5'
        }
        , {
            id: '0'
            , user: 'Alvin Reyes'
            , 'review': 'yehey'
            , 'rating': '4.5'
        }
    , ];

    $scope.selectedBusiness;
    $scope.map;
    var options = {
        timeout: 10000
        , enableHighAccuracy: false
    };
    $scope.init = function () {
        $ionicLoading.show({
            template: 'Loading...'
        }).then(function () {
            console.log(selectedfactory.getSelectedBusiness());
            console.log("The loading indicator is now displayed");
        });

        $scope.selectedBusiness = selectedfactory.getSelectedBusiness();
        var latLng = new google.maps.LatLng($scope.selectedBusiness.geometry.location.lat(), $scope.selectedBusiness.geometry.location.lng());
        var mapOptions = {
            center: latLng
            , zoom: 15
            , mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        console.log(">>>");
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        console.log(">>>");
        google.maps.event.addListenerOnce(map, 'idle', function () {
            var marker = new google.maps.Marker({
                map: map
                , animation: google.maps.Animation.DROP
                , position: latLng
            });

        });
        $scope.map = map;
        $ionicLoading.hide();
    }
    $scope.mapCreated = function (map) {
        $scope.map = map;
    };
    $scope.centerOnMe = function () {
        console.log("Centering");
        if (!$scope.map) {
            return;
        }

        $scope.loading = $ionicLoading.show({
            content: 'Getting current location...'
            , showBackdrop: false
        });

        navigator.geolocation.getCurrentPosition(function (pos) {
            console.log('Got pos', pos);
            $scope.map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
            $scope.loading.hide();
        }, function (error) {
            alert('Unable to get location: ' + error.message);
        });
    };
    
    $scope.hello = function() {
        alert('asasa');
    }
    $scope.checkin = function() {
        
        var myPopup = $ionicPopup.show({
            templateUrl: 'templates/checkin/index.html',
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
    
    //  Check in code.
});