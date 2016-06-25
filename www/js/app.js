angular.module('zatiqctrl', ['ionic', 'zatiqctrl.controllers', 'zatiqctrl.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

  // setup an abstract state for the tabs directive
  .state('zqt', {
    url: '/zqt',
    abstract: true,
    templateUrl: 'templates/masterlayout.html'
  })
  
  .state('zqt.dashboard', {
    url: '/dashboard',
    templateUrl: 'templates/dashboard/zqt-dashboard.html',
    controller: 'DashboardCtrl'
  })

  .state('zqt.top-food', {
      url: '/top-food/',
      views: {
        'top-food': {
          templateUrl: 'templates/top-items/food.html',
          controller: 'TopFoodCtrl'
        }
      }
    })
  
  .state('zqt.top-nightlf', {
      url: '/top-nightlf/',
      views: {
        'top-nightlf': {
          templateUrl: 'templates/top-items/nightlf.html',
          controller: 'TopNightLfCtrl'
        }
      }
    })
  
   .state('zqt.top-places', {
      url: '/top-places/',
      views: {
        'top-places': {
          templateUrl: 'templates/top-items/places.html',
          controller: 'TopPlacesCtrl'
        }
      }
    })
  
    .state('zqt.top-more', {
      url: '/top-more/',
      views: {
        'top-more': {
          templateUrl: 'templates/top-items/more.html',
          controller: 'TopMoreCtrl'
        }
      }
    })
  
  //    Bottom
  .state('zqt.profile', {
     url: '/profile/',
      views: {
        'top-more': {
          templateUrl: 'templates/profile/index.html',
          controller: 'TopMoreCtrl'
        }
      } 
  })
  .state('zqt.notification', {
     url: '/notifications/',
      views: {
        'top-more': {
          templateUrl: 'templates/notification/index.html',
          controller: 'TopMoreCtrl'
        }
      } 
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/zqt/dashboard');
});
