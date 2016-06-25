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
    console.log("top foods");
    $scope.foods = food.getFoods();
    console.log(foods);
})

.controller('TopNightLfCtrl', function($scope,nightlife) {
    $scope.nightlifes = nightlife.getNLs();
})

.controller('TopPlacesCtrl', function($scope) {
    console.log("top places");
})

.controller('TopMoreCtrl', function($scope) {
    console.log("top more");
})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
