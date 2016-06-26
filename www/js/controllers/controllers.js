'use strict';
angular.module('zatiqctrl.controllers', [])
.controller('DashboardCtrl', function ($scope, $http,$cordovaGeolocation) {
    $scope.lat = '';
    $scope.long = '';
    navigator.geolocation.getCurrentPosition(function(position) {
        $scope.lat = position.coords.latitude;
        $scope.long = position.coords.longitude;
        var url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + $scope.lat+ ","+$scope.long+"&radius=5000&key=AIzaSyCfp6B83teeIUqhXJ_cgl4U7hOVIqIAHtI";
        $http.get(url).success(function (res) {
            console.log(res);
        });
    });
    
    //  display the places that the user hasn't reviewed yet.
    $scope.displayPlaces = function() {
        
    }

})
.controller('ChatsCtrl', function ($scope, Chats) {

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
        Chats.remove(chat);
    };
})
.controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
})
.controller('TopFoodCtrl', function ($scope, food) {
    $scope.foods = food.getFoods();
})
.controller('TopNightLfCtrl', function ($scope, nightlife) {
    $scope.nightlifes = nightlife.getNLs();
})
.controller('TopPlacesCtrl', function ($scope, places) {
    $scope.places = places.getPlaces();
})
.controller('TopMoreCtrl', function ($scope) {
        console.log("top more");
})
.controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    })