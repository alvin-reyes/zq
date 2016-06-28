'use strict';
angular.module('zatiqctrl.controllers', [])
    .controller('ChatsCtrl', function ($scope, Chats) {

        $scope.chats = Chats.all();
        $scope.remove = function (chat) {
            Chats.remove(chat);
        };
    })
    .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
        $scope.chat = Chats.get($stateParams.chatId);
    })
    .controller('TopFoodCtrl', function ($scope, $http, $ionicLoading, foodfactory, gconfigfactory) {
        $scope.foods = foodfactory.getFoods();
        $scope.getFoodBusinesses = function () {
            return console.log(foodfactory.getNearbyFoods().result());
        }
    })
    .controller('TopNightLfCtrl', function ($scope, nightlifefactory) {
        $scope.nightlifes = nightlifefactory.getNLs();
    })
    .controller('TopPlacesCtrl', function ($scope, placesfactory) {
        $scope.places = placesfactory.getPlaces();
    })
    .controller('TopMoreCtrl', function ($scope) {
        console.log("top more");
    })
    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    })