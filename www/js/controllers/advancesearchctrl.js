angular.module('zatiqctrl.controllers')
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