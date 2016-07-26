angular.module('zatiqctrl.controllers', [])
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
        $scope.business = nearbyfactory.resultContainer(new Array()).getNearby(selectedfactory.getSelectedCategory().meta_code,5).result();
        $scope.$broadcast('scroll.refreshComplete');
    }
    $scope.viewbusiness = function(place) {
        selectedfactory.setSelectedBusiness(place);
        $state.go('zblk.viewbusiness');
    }
})