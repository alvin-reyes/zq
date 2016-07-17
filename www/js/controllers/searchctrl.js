angular.module('zatiqctrl.controllers')
.controller('SearchCtrl',function($scope,$stateParams,$timeout,$state,$cordovaGeolocation,businessfactory,nearbyfactory,selectedfactory){

    //  Page events.
    $scope.$on('$ionicView.loaded', function(){
        $scope.getBusinesses();
    });
    
    //  Functional search
    $scope.business = [];
    $scope.keyword = $stateParams.keyword;
    $scope.keywordlc = $scope.keyword.toLowerCase();
    
    //  Let's get all the businesses
    $scope.getBusinesses = function() {
        $scope.business = [];

        var lat = 0;
        var long = 0;
        var currentLoc;
        var map;
        var limit = 5;
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
                , query: $scope.keywordlc
            };

            service = new google.maps.places.PlacesService(map);
            service.textSearch(request, callback);

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
                            $scope.business.push(place);
                        });
                        
                    }
                    //$ionicLoading.hide();
                }
            }
        },function(err) {
             //$ionicLoading.hide();
            console.log(err);
        });
        
        $scope.$broadcast('scroll.refreshComplete');
    }
    
    $scope.viewbusiness = function(place) {
        selectedfactory.setSelectedBusiness(place);
        $state.go('zblk.viewbusiness');
    }
})