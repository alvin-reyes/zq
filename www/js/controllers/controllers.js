angular.module('zatiqctrl.controllers', [])
//.controller('TopFoodCtrl', function ($scope, $state, nearbyfactory, gconfigfactory, selectedfactory) {
//    $scope.$on("$ionicView.beforeEnter", function(event, data){
//        $scope.getBusinesses();
//    });
//    
//    $scope.business = [];
//    $scope.getBusinesses = function() {
//        $scope.business = nearbyfactory
//            .resultContainer(new Array()).getNearby(['restaurants','food'],10).result();
//        $scope.$broadcast('scroll.refreshComplete');
//    }
//    $scope.viewbusiness = function(place) {
//        selectedfactory.setSelectedBusiness(place);
//        $state.go('zblk.viewbusiness');
//    }
//})
//.controller('TopNightLfCtrl', function ($scope, $state,nearbyfactory,selectedfactory) {
//    $scope.$on("$ionicView.beforeEnter", function(event, data){
//        $scope.getBusinesses();
//    });
//    $scope.business;
//    $scope.getBusinesses = function() {
//        $scope.business = nearbyfactory.resultContainer(new Array()).getNearby(['night_club','casino','bar'],10).result();
//        $scope.$broadcast('scroll.refreshComplete');
//    }
//    $scope.viewbusiness = function(place) {
//        selectedfactory.setSelectedBusiness(place);
//        $state.go('zblk.viewbusiness');
//    }
//})
//.controller('TopPlacesCtrl', function ($scope, $state,nearbyfactory,selectedfactory) {
//    $scope.$on("$ionicView.beforeEnter", function(event, data){
//        $scope.getBusinesses();
//    });
//    $scope.business;
//    $scope.getBusinesses = function() {
//        $scope.business = nearbyfactory.resultContainer(new Array()).getNearby(['premise','park','shopping_mall'],10).result();
//        $scope.$broadcast('scroll.refreshComplete');
//    }
//    $scope.viewbusiness = function(place) {
//        selectedfactory.setSelectedBusiness(place);
//        $state.go('zblk.viewbusiness');
//    }
//})

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
//        $scope.business = nearbyfactory.resultContainer(new Array()).
//        getNearbyTextSearch($scope.keywordlc,5).result();
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
                , zoom: 15
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
.controller('AdvanceSearchCtrl',function($scope,$stateParams,$timeout,$state,businessfactory,nearbyfactory,selectedfactory){
    $scope.$on('$ionicView.loaded', function(){
        $scope.getBusinesses();
    });
       
    $scope.keyword = $stateParams.keyword;
    $scope.keywordlc = $scope.keyword.toLowerCase();
    $scope.business = [];

    $scope.business = 
        nearbyfactory.resultContainer(new Array()).
        getNearbyTextSearch($scope.keywordlc,5).result();
        
    $scope.$broadcast('scroll.refreshComplete');
    
    $scope.getBusinesses = function() {
        $scope.business = nearbyfactory.resultContainer(new Array()).
        getNearbyTextSearch($scope.keywordlc,5).result();
        $scope.$broadcast('scroll.refreshComplete');
    }
})
.controller('TopMoreCtrl', function ($scope,$state,businessfactory,selectedfactory) {
    
    $scope.popularcategories = businessfactory.getPopularCategories();
    $scope.viewsearchcategory = function(cat) {
        selectedfactory.setSelectedCategory(cat);
        $state.go('srch.top-more-search');
    }
    
})
.controller('TopMoreSearchCtrl', function ($scope,$state,$location,nearbyfactory,selectedfactory) {
    $scope.$on("$ionicView.beforeEnter", function(event, data){
        $scope.getBusinesses();
    });
    $scope.business;
    $scope.category;
    $scope.getBusinesses = function() {
        $scope.category = selectedfactory.getSelectedCategory();
        $scope.business = nearbyfactory.resultContainer(new Array()).getNearby(selectedfactory.getSelectedCategory().meta_code,10).result();
        $scope.$broadcast('scroll.refreshComplete');
    }
    $scope.viewbusiness = function(place) {
        selectedfactory.setSelectedBusiness(place);
        $state.go('zblk.viewbusiness');
        //$location.path('/zblk/viewbusiness/');
    }
})