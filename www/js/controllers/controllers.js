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

.controller('SearchCtrl',function($scope,$stateParams,$timeout,$state,businessfactory,nearbyfactory,selectedfactory){
    $scope.$on('$ionicView.loaded', function(){
        $scope.getBusinesses();
    });
    
    $scope.business = new Array()[0];
    $scope.keyword = $stateParams.keyword;
    $scope.keywordlc = $scope.keyword.toLowerCase();
    
    
    $scope.getBusinesses = function() {
        $scope.business = nearbyfactory.resultContainer(new Array()).
        getNearbyTextSearch($scope.keywordlc,5).result();
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