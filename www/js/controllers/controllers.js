angular.module('zatiqctrl.controllers', [])
.controller('TopFoodCtrl', function ($scope, $state, nearbyfactory, gconfigfactory, selectedfactory) {
    $scope.$on("$ionicView.beforeEnter", function(event, data){
        $scope.getBusinesses();
    });
    
    $scope.business = [];
    $scope.getBusinesses = function() {
        $scope.business = nearbyfactory
            .resultContainer(new Array()).getNearby(['restaurants','food'],10).result();
    }
    $scope.viewbusiness = function(place) {
        selectedfactory.setSelectedBusiness(place);
        $state.go('zqt.viewbusiness');
    }

})
.controller('TopNightLfCtrl', function ($scope, $state,nearbyfactory,selectedfactory) {
    $scope.$on("$ionicView.beforeEnter", function(event, data){
        $scope.getBusinesses();
    });
    $scope.business;
    $scope.getBusinesses = function() {
        $scope.business = nearbyfactory.resultContainer(new Array()).getNearby(['night_club','casino','bar'],10).result();
    }
    $scope.viewbusiness = function(place) {
        selectedfactory.setSelectedBusiness(place);
        $state.go('zqt.viewbusiness');
    }
})
.controller('TopPlacesCtrl', function ($scope, $state,nearbyfactory,selectedfactory) {
    $scope.$on("$ionicView.beforeEnter", function(event, data){
        $scope.getBusinesses();
    });
    $scope.business;
    $scope.getBusinesses = function() {
        $scope.business = nearbyfactory.resultContainer(new Array()).getNearby(['premise','park','shopping_mall'],10).result();
    }
    $scope.viewbusiness = function(place) {
        selectedfactory.setSelectedBusiness(place);
        $state.go('zqt.viewbusiness');
    }
})
.controller('TopMoreCtrl', function ($scope,$state,businessfactory,selectedfactory) {
    $scope.popularcategories = businessfactory.getPopularCategories();
    $scope.viewsearchcategory = function(cat) {
        selectedfactory.setSelectedCategory(cat);
        $state.go('zqt.top-more-search');
    }
    
})
.controller('TopMoreSearchCtrl', function ($scope,$state,nearbyfactory,selectedfactory) {
    $scope.$on("$ionicView.beforeEnter", function(event, data){
        $scope.getBusinesses();
    });
    $scope.business;
    $scope.category;
    $scope.getBusinesses = function() {
        $scope.category = selectedfactory.getSelectedCategory();
        $scope.business = nearbyfactory.resultContainer(new Array()).getNearby(selectedfactory.getSelectedCategory().meta_code,10).result();
    }
    $scope.viewbusiness = function(place) {
        selectedfactory.setSelectedBusiness(place);
        $state.go('zqt.viewbusiness');
    }
})