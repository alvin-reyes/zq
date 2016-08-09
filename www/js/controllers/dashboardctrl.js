angular.module('zatiqctrl.controllers')
.controller('DashboardCtrl', function($scope,$state,$ionicActionSheet,$cordovaGeolocation,selectedfactory,nearbyfactory) {
    
    $scope.dashboarditems;
    $scope.noMoreItemsAvailable = false;
    $scope.getBusinesses = function() {
        $scope.dashboarditems = [];
        var lat = 0;
        var long = 0;
        var currentLoc;
        var map;
        var limit = 10;
        var posOptions = {timeout: 3000, enableHighAccuracy: false};
        var currentLoc = $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {

            lat = position.coords.latitude;
            long = position.coords.longitude;
            currentLoc = new google.maps.LatLng(lat, long);

            map = new google.maps.Map(document.getElementById('map'), {
                center: currentLoc
                , zoom: 20
            });

            var request = {
                location: currentLoc
                , radius: '500'
            };

            service = new google.maps.places.PlacesService(map);
            service.nearbySearch(request, callback);

            function callback(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < limit; i++) {
                        var place = results[i];
                        if(place == null || place == undefined) {break;}
                        if(place.photos != undefined) {
                            place.photos[0]['imageUrl'] = place.photos[0].getUrl({maxWidth:80,maxHeight:80});
                        }

                        //  before push, check if the user already rated this place.
                        $scope.$apply(function() {
//                            $http.post(gconfigfactory.getUrl('DEV') + 'business/add/', place).
//                            then(
//                                function(response) {
//                                    console.log("Error");
//                                }
//                            );
                            $scope.dashboarditems.push(place);
                        });
                        
                    }
                    //$ionicLoading.hide();
                }
            }
        },function(err) {
             //$ionicLoading.hide();
            console.log(err);
        });
        $scope.$broadcast('scroll.infiniteScrollComplete');
        $scope.$broadcast('scroll.refreshComplete');
        
        if ($scope.items.length == 10) {
            $scope.noMoreItemsAvailable = true;
        }
    }
    $scope.viewbusiness = function(place) {
        selectedfactory.setSelectedBusiness(place);
        $state.go('zblk.viewbusiness');
    }
    $scope.suggestions = function() {
        
    }
    
    $scope.ads = function() {
        
    }
    
});