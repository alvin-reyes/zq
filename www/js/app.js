angular.module('zatiqctrl', ['ionic','ionic-material','ionic-ratings','ngCordova', 'zatiqctrl.controllers', 'zatiqctrl.datafactory','zatiqctrl.services'])

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
    .state('zblk.login', {
        url: '/login/'
        , templateUrl: 'templates/login/index.html'
        , controller: 'LoginCtrl'
    })
    .state('zqt.dashboard', {
        url: '/dashboard/',
        views: {
            'zqt.dashboard': {
                templateUrl: 'templates/dashboard/zqt-dashboard.html',
                controller: 'DashboardCtrl'
            }
        }
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
    .state('srch.search', {
        url: '/search/:keyword/'
        , templateUrl: 'templates/search/search.html'
        , controller: 'SearchCtrl'
    })
    .state('zqt.profile', {
        url: '/profile/',
        views: {
            'zqt.profile': {
                templateUrl: 'templates/profile/index.html',
                controller: 'ProfileCtrl'
            }
        }

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

    $urlRouterProvider.otherwise('/zqt/dashboard/');
});