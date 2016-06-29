angular.module('zatiqctrl.datafactory')
.factory('nearbyfactory', function (gconfigfactory,$ionicLoading) {
        var result = [];
        var currentLat = 0;
        var currentLong = 0;
        return {
            resultContainer : function(resultContainer) {
                
                $ionicLoading.show({
                        template: 'Loading...'
                    }).then(function () {
                        console.log("The loading indicator is now displayed");
                });
                
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

                var currentLoc = navigator.geolocation.getCurrentPosition(function (position) {
                    this.result = [];
                    lat = position.coords.latitude;
                    long = position.coords.longitude;
                    currentLoc = new google.maps.LatLng(lat, long);

                    map = new google.maps.Map(document.getElementById('map'), {
                        center: currentLoc
                        , zoom: 15
                    });

                    var request = {
                        location: currentLoc
                        , radius: '500'
                        , types: types
                    };
                        
                    service = new google.maps.places.PlacesService(map);
                    service.nearbySearch(request, callback);

                    function callback(results, status) {
                        if (status == google.maps.places.PlacesServiceStatus.OK) {
                            for (var i = 0; i < limit; i++) {
                                var place = results[i];
                                result.push(place);
                            }
                            $ionicLoading.hide();
                            console.log(result);
                        }
                    } 
                });
                return this;
            }
        };
    })
.factory('foodfactory', function (gconfigfactory, $http, $ionicLoading) {
        var result = [];
        return {
            result : function() {
                return result;
            },
            getNearby: function(types,limit) {
                var lat = 0;
                var long = 0;
                var currentLoc;
                var map;

                var currentLoc = navigator.geolocation.getCurrentPosition(function (position) {
                    this.result = [];
                    lat = position.coords.latitude;
                    long = position.coords.longitude;
                    currentLoc = new google.maps.LatLng(lat, long);

                    map = new google.maps.Map(document.getElementById('map'), {
                        center: currentLoc
                        , zoom: 15
                    });

                    var request = {
                        location: currentLoc
                        , radius: '500'
                        , types: types
                    };

                    $ionicLoading.show({
                        template: 'Loading...'
                    }).then(function () {
                        console.log("The loading indicator is now displayed");
                    });

                    service = new google.maps.places.PlacesService(map);
                    service.nearbySearch(request, callback);

                    function callback(results, status) {
                        if (status == google.maps.places.PlacesServiceStatus.OK) {
                            for (var i = 0; i < limit; i++) {
                                var place = results[i];
                                result.push(place);
                            }
                            $ionicLoading.hide();
                            console.log(result);
                        }
                    } 
                });
                return this;
            }
        };
    })
.factory('nightlifefactory', function (gconfigfactory, $http, $ionicLoading) {

        var nl = [
            {
                id: 0
                , type: 'nightlife'
                , name: 'Nightlife 1'
                , desc: 'This is a NL'
                , img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1920px-Good_Food_Display_-_NCI_Visuals_Online.jpg'
                , meta: []
            }
            , {
                id: 1
                , type: 'nightlife'
                , name: 'Nightlife 2'
                , desc: 'This is a NL'
                , img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Foods_%28cropped%29.jpg/1024px-Foods_%28cropped%29.jpg'
                , meta: []
            }
    ];

        return {

            getNLs: function () {
                return nl;
            },

            getNearByNightlifes: function () {
                var lat = 0;
                var long = 0;
                var result = null;
                navigator.geolocation.getCurrentPosition(function (position) {
                    lat = position.coords.latitude;
                    long = position.coords.longitude;

                    $ionicLoading.show({
                        template: 'Loading...'
                    }).then(function () {
                        console.log("The loading indicator is now displayed");
                    });

                    $http({
                        url: gconfigfactory.getGooglePlacesUrl() + '?location=' + lat + ',' + long + '&radius=900&type=food&key=' + gconfigfactory.getGooglePlacesAPI()
                        , dataType: 'JSONP'
                        , method: 'GET'
                    }).success(function (res) {
                        result = res;
                        $ionicLoading.hide();
                    });
                });
                return result;
            }
        };
    })
.factory('placesfactory', function (gconfigfactory, $http, $ionicLoading) {
    var places = [
        {
            id: 0
            , type: 'nightlife'
            , name: 'Places 1'
            , desc: 'This is a Place'
            , img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1920px-Good_Food_Display_-_NCI_Visuals_Online.jpg'
            , meta: []
        }
        , {
            id: 1
            , type: 'nightlife'
            , name: 'Places 1'
            , desc: 'This is a Place'
            , img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Foods_%28cropped%29.jpg/1024px-Foods_%28cropped%29.jpg'
            , meta: []
        }
];

    return {

        getPlaces: function () {
            return places;
        }
    , };
})
.factory('businesssearchfactory', function (gconfigfactory, $http, $ionicLoading) {

    return {
        searchBusinesses: function (keyword) {
            var lat = 0;
            var long = 0;
            var result = null;
            navigator.geolocation.getCurrentPosition(function (position) {
                lat = position.coords.latitude;
                long = position.coords.longitude;

                $ionicLoading.show({
                    template: 'Loading...'
                }).then(function () {
                    console.log("The loading indicator is now displayed");
                });

                $http({
                    url: gconfigfactory.getGooglePlacesUrl() + '?location=' + lat + ',' + long + '&radius=500&type=food&key=' + gconfigfactory.getGooglePlacesAPI()
                    , dataType: 'JSONP'
                    , method: 'GET'
                }).success(function (res) {
                    result = res;
                    $ionicLoading.hide();
                });
            });
            return result;
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
.factory('advancesearchfactory', function () {

    })