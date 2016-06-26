angular.module('zatiqctrl.controllers')
.controller('NearByCtrl', function($scope,$http) {
    $http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&name=cruise&key=AIzaSyCfp6B83teeIUqhXJ_cgl4U7hOVIqIAHtI').success(function(res) {
            alert ("hello");
            console.log(res);
        });
    
    $scope.lat = '';
    $scope.long = '';
    $scope.getNearByBusinesses = function() {
        navigator.geolocation.getCurrentPosition(function(position) {
            $scope.lat = position.coords.latitude;
            $scope.long = position.coords.longitude;
        });
        
        $http.get('https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&name=cruise&key=AIzaSyCfp6B83teeIUqhXJ_cgl4U7hOVIqIAHtI').success(function(res) {
            alert ("hello");
            console.log(res);
        });
    }
});

