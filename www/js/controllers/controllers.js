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
    .controller('TopFoodCtrl', function ($scope, $http, $ionicLoading, nearbyfactory, gconfigfactory) {
        $scope.business = [];
        $scope.getBusinesses = function() {
            $scope.business = nearbyfactory
                .resultContainer(new Array()).getNearby(['restaurants','food'],3).result();
        }
    })
    .controller('TopNightLfCtrl', function ($scope, nearbyfactory) {
        $scope.business;
        $scope.getBusinesses = function() {
            $scope.business = nearbyfactory.resultContainer(new Array()).getNearby(['eve','night'],3).result();
        }
    })
    .controller('TopPlacesCtrl', function ($scope, nearbyfactory) {
        $scope.business;
        $scope.getBusinesses = function() {
            $scope.business = nearbyfactory.resultContainer(new Array()).getNearby(['places'],3).result();
        }
    })
    .controller('TopMoreCtrl', function ($scope) {
    })
    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    })