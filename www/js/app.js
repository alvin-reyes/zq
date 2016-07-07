angular.module('zatiqctrl', ['ionic', 'ionic.rating','ngCordova', 'zatiqctrl.controllers', 'zatiqctrl.datafactory'])

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

.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('zqt', {
            url: '/zqt'
            , abstract: true
            , templateUrl: 'templates/masterlayout.html'
        })

    .state('zqt.dashboard', {
        url: '/dashboard'
        , templateUrl: 'templates/dashboard/zqt-dashboard.html'
        , controller: 'DashboardCtrl'
    })

    .state('zqt.top-food', {
        url: '/top-food/'
        , templateUrl: 'templates/top-items/food.html'
        , controller: 'TopFoodCtrl'
    })

    .state('zqt.top-nightlf', {
        url: '/top-nightlf/'
        , templateUrl: 'templates/top-items/nightlf.html'
        , controller: 'TopNightLfCtrl'
    })

    .state('zqt.top-places', {
        url: '/top-places/'
        , templateUrl: 'templates/top-items/places.html'
        , controller: 'TopPlacesCtrl'
    })
    .state('zqt.top-more', {
        url: '/top-more/'
        , templateUrl: 'templates/top-items/more.html'
        , controller: 'TopMoreCtrl'
    })
    .state('zqt.top-more-search', {
        url: '/top-more-search/'
        , templateUrl: 'templates/top-items/more-search.html'
        , controller: 'TopMoreSearchCtrl'
    })
    .state('zqt.profile', {
        url: '/profile/'
        , templateUrl: 'templates/profile/index.html'
        , controller: 'TopMoreCtrl'
    })
    .state('zqt.notifications', {
        url: '/notifications/'
        , templateUrl: 'templates/notification/index.html'
        , controller: 'TopMoreCtrl'
    })

    .state('zqt.addreview', {
        url: '/addreview/'
        , templateUrl: 'templates/addreview/index.html'
        , controller: 'AddReviewCtrl'
    })
    .state('zqt.addphotovideo', {
        url: '/addphotovideo/'
        , templateUrl: 'templates/addphotovideo/index.html'
        , controller: 'AddPhotoVideoCtrl'
    })
    .state('zqt.checkin', {
        url: '/checkin/'
        , templateUrl: 'templates/checkin/index.html'
        , controller: 'CheckinCtrl'
    })    
    .state('zqt.viewbusiness', {
        url: '/viewbusiness/'
        , templateUrl: 'templates/business/index.html'
        , controller: 'ViewBusinessCtrl'
    })

    $urlRouterProvider.otherwise('/zqt/dashboard');
});