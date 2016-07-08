angular.module('zatiqctrl.controllers')

.controller('NotificationsCtrl', function($scope) {
    
    $scope.$on("$ionicView.beforeEnter", function(event, data){
        console.log("notif");
    });
    
})