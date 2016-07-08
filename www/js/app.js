angular.module('zatiqctrl', ['ionic','ionic-material','ionic.rating','ngCordova', 'zatiqctrl.controllers', 'zatiqctrl.datafactory'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})
.config(function($ionicConfigProvider) {
    $ionicConfigProvider.backButton.text('').icon('ion-ios-arrow-left');
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.views.transition('none');
//    $ionicPlatform.ready(function () {
//        if (ionic.Platform.grade.toLowerCase()!='a') {
//            $ionicConfig.views.transition('none');
//            console.log('Ionic Platform Grade is not A, disabling views transitions ');
//        }
//    })
})
.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('srch', {
            url: '/srch'
            , abstract: true
            , templateUrl: 'templates/searchlayout.html'
        })
    .state('zqt', {
            url: '/zqt'
            , abstract: true
            , templateUrl: 'templates/masterlayout.html'
        })
    .state('zblk', {
            url: '/zblk'
            , abstract: true
            , templateUrl: 'templates/blanklayout.html'
        })
    .state('zqt.dashboard', {
        url: '/dashboard'
        , templateUrl: 'templates/dashboard/zqt-dashboard.html'
        , controller: 'DashboardCtrl'
    })

    .state('srch.top-food', {
        url: '/top-food/'
        , templateUrl: 'templates/top-items/food.html'
        , controller: 'TopFoodCtrl'
    })

    .state('srch.top-nightlf', {
        url: '/top-nightlf/'
        , templateUrl: 'templates/top-items/nightlf.html'
        , controller: 'TopNightLfCtrl'
    })

    .state('srch.top-places', {
        url: '/top-places/'
        , templateUrl: 'templates/top-items/places.html'
        , controller: 'TopPlacesCtrl'
    })
    .state('srch.top-more', {
        url: '/top-more/'
        , templateUrl: 'templates/top-items/more.html'
        , controller: 'TopMoreCtrl'
    })
    .state('srch.top-more-search', {
        url: '/top-more-search/'
        , templateUrl: 'templates/top-items/more-search.html'
        , controller: 'TopMoreSearchCtrl'
    })
    .state('zqt.profile', {
        url: '/profile/'
        , templateUrl: 'templates/profile/index.html'
        , controller: 'ProfileCtrl'
    })
    .state('zqt.notifications', {
        url: '/notifications/',
        views: {
            'zqt.notifications': {
                templateUrl: 'templates/notification/index.html',
                controller: 'NotificationsCtrl'
            }
        }
    })

    .state('zblk.addreview', {
        url: '/addreview/'
        , templateUrl: 'templates/addreview/index.html'
        , controller: 'AddReviewCtrl'
    })
    .state('zblk.addphotovideo', {
        url: '/addphotovideo/'
        , templateUrl: 'templates/addphotovideo/index.html'
        , controller: 'AddPhotoVideoCtrl'
    })
    .state('zblk.checkin', {
        url: '/checkin/'
        , templateUrl: 'templates/checkin/index.html'
        , controller: 'CheckinCtrl'
    })    
    .state('zblk.viewbusiness', {
        url: '/viewbusiness/'
        , templateUrl: 'templates/business/index.html'
        , controller: 'ViewBusinessCtrl'
    })

    $urlRouterProvider.otherwise('/zqt/dashboard');
});

angular.module('zatiqctrl')
.run(function($ionicPlatform,$rootScope,$ionicActionSheet) {

    $rootScope.showActionSheet = function() {
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: "A" },
          { text: 'B' }
        ],
        destructiveText: 'Add Review',
        cancelText: 'Cancel',
        cancel: function() {
        // add cancel code..
        },
        buttonClicked: function(index) {
          return true;
        }
    });


  };

})