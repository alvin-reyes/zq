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
    .controller('TopFoodCtrl', function ($scope, $state, nearbyfactory, gconfigfactory, selectedfactory) {
        $scope.business = [];
        $scope.getBusinesses = function() {
            $scope.business = nearbyfactory
                .resultContainer(new Array()).getNearby(['restaurants','food'],3).result();
        }
        $scope.viewbusiness = function(place) {
            selectedfactory.setSelectedBusiness(place);
            $state.go('zqt.viewbusiness');
        }
    })
    .controller('TopNightLfCtrl', function ($scope, $state,nearbyfactory,selectedfactory) {
        $scope.business;
        $scope.getBusinesses = function() {
            $scope.business = nearbyfactory.resultContainer(new Array()).getNearby(['eve','night'],3).result();
        }
        $scope.viewbusiness = function(place) {
            selectedfactory.setSelectedBusiness(place);
            $state.go('zqt.viewbusiness');
        }
    })
    .controller('TopPlacesCtrl', function ($scope, $state,nearbyfactory,selectedfactory) {
        $scope.business;
        $scope.getBusinesses = function() {
            $scope.business = nearbyfactory.resultContainer(new Array()).getNearby(['places'],3).result();
        }
        $scope.viewbusiness = function(place) {
            selectedfactory.setSelectedBusiness(place);
            $state.go('zqt.viewbusiness');
        }
    })
    .controller('TopMoreCtrl', function ($scope) {
    })
    .controller('AccountCtrl', function ($scope) {
        $scope.settings = {
            enableFriends: true
        };
    })