angular.module('zatiqctrl.datafactory')
.factory('nearbyfactory', function (gconfigfactory,$q,$cordovaGeolocation,$ionicLoading) {
        var result = [];
        var currentLat = 0;
        var currentLong = 0;
        return {
            resultContainer : function(resultContainer) {
                
//                $ionicLoading.show({
//                        template: 'Loading...'
//                    }).then(function () {
//                        console.log("The loading indicator is now displayed");
//                });
                result = resultContainer;
                return this;
            },
            result : function() {
                return result;
            },
            getNearby: function(types,limit) {
                
                var lat = 0;
                var long = 0;
                var currentLoc;
                var map;
                var posOptions = {timeout: 10000, enableHighAccuracy: true};
                var currentLoc = $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
                    
                    lat = position.coords.latitude;
                    long = position.coords.longitude;
                    currentLoc = new google.maps.LatLng(lat, long);

                    map = new google.maps.Map(document.getElementById('map'), {
                        center: currentLoc
                        , zoom: 15
                    });

                    var request = {
                        location: currentLoc
                        , radius: '1000'
                        , types: types
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
                                result.push(place);
                            }
                            //$ionicLoading.hide();
                        }
                    } 
                },function(err) {
                     //$ionicLoading.hide();
                });
                return this;
            },
            getNearbyTextSearch: function(text,limit) {
                
                var lat = 0;
                var long = 0;
                var currentLoc;
                var map;
                var posOptions = {timeout: 3000, enableHighAccuracy: false};
                var currentLoc = $cordovaGeolocation.getCurrentPosition(posOptions).then(function (position) {
    
                    lat = position.coords.latitude;
                    long = position.coords.longitude;
                    currentLoc = new google.maps.LatLng(lat, long);

                    map = new google.maps.Map(document.getElementById('map'), {
                        center: currentLoc
                        , zoom: 15
                    });

                    var request = {
                        location: currentLoc
                        , radius: '1000'
                        , query: text
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
                                result.push(place);
                            }
                            //$ionicLoading.hide();
                        }
                    }
                },function(err) {
                     //$ionicLoading.hide();
                    console.log(err);
                });

                return this;
            }
        };
    })
.factory('searchbusinessfactory', function () {

    return {

        searchFactoryByTypes: function (types) {

        }
        , searchFactoryByType: function (type) {

        }
        , searchFactoryByName: function (name) {

        }


    }
})
.factory('ratingsreviewsfactory', function (gconfigfactory, $http, $ionicLoading) {

    //  {id:0,meta:'',review:'',rate}
    var ratingsreviews = new Array();
    return {
        getRatings: function () {
            return ratingsreviews;
        }
        , addRatings: function (user, item, rating) {
            ratingsreviews.unshift({
                id: 0
                , user: user
                , item: item
                , rate: rating.rate
                , review: rating.review
            });
        }
    };
})
.factory('usersfactory', function (gconfigfactory, $http, $ionicLoading) {
    var users = new Array();
    return {
        getRatings: function () {
            return ratingsreviews;
        }
        , addRatings: function (user, item, rating) {
            ratingsreviews.unshift({
                id: 0
                , user: user
                , item: item
                , rate: rating.rate
                , review: rating.review
            });
        }
    };
})
.factory('businesscategoryfactory', function () {

})
.factory('advancesearchfactory', function () {

    })