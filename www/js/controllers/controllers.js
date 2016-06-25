angular.module('zatiqctrl.controllers', [])

.controller('DashboardCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('TopFoodCtrl', function($scope,food) {
    $scope.foods = food.getFoods();
})

.controller('TopNightLfCtrl', function($scope,nightlife) {
    $scope.nightlifes = nightlife.getNLs();
})

.controller('TopPlacesCtrl', function($scope,places) {
    $scope.places = places.getPlaces();
})

.controller('TopMoreCtrl', function($scope) {
    console.log("top more");
})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
