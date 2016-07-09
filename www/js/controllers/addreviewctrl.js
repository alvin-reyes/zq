angular.module('zatiqctrl.controllers')

.controller('AddReviewCtrl', function($scope,$ionicLoading,$ionicModal) {
    
    var sampleData = [
      {
         "geometry" : {
            "location" : {
               "lat" : 43.653226,
               "lng" : -79.3831843
            },
            "viewport" : {
               "northeast" : {
                  "lat" : 43.8554579,
                  "lng" : -79.1168971
               },
               "southwest" : {
                  "lat" : 43.5810246,
                  "lng" : -79.639219
               }
            }
         },
         "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png",
         "id" : "9cdc0b86ce6052ab269593184e7762372e698584",
         "name" : "Toronto",
         "photos" : [
            {
               "height" : 667,
               "html_attributions" : [
                  "\u003ca href=\"https://maps.google.com/maps/contrib/111431800913254389518/photos\"\u003eAlbertus Photo &amp; Design\u003c/a\u003e"
               ],
               "photo_reference" : "CoQBdwAAAALEbB3M5HjvLoXcbSSWbhei1wWohgi9Fl7nCSsB1xjORSdTPVgaTJy-6ih_MlBXN_u1xCcErIDWHVYA4JfdPjdJr-vCwZxyBtGs8FLqaqKXQe-eCrxa1V0zKSsrqHb9-YHxqMCScbGqQo8o84JVZ8YNGpQ89M3A4xdir4zJ9-C9EhArUzPfAug179WI-2-DzDqmGhQml11KGKkJiEnJY1wvSFvdJaj9Qw",
               "width" : 999
            }
         ],
         "place_id" : "ChIJpTvG15DL1IkRd8S0KlBVNTI",
         "reference" : "CnRwAAAAfZ-8E6hqNmVQ937oPc8zaFkef-seRlS5RKISq2xB4jx-Tt0nwMv0D6WPnIuqQ2ggWHylr-OooXUw67boyqGgnHvobyJkjqmT3SEtJ-jIWqGlygUqTkvafIbmWnDDsfaQ7lAihhRiiaIn5GmbjXvEghIQGvqEN40G6HeZThTBAXqlPBoUA0IppkjONhP2V6Ul87UWwXCGDHo",
         "scope" : "GOOGLE",
         "types" : [ "locality", "political" ],
         "vicinity" : "Toronto"
      }];
    $scope.selectedBusiness;
    $scope.init = function(){
         $ionicLoading.show({
              template: 'Loading...'
        }).then(function(){
           console.log("The loading indicator is now displayed");
        });
    }
    
    $scope.moredata = false;
    $scope.loadMoreData = function()    {
        $scope.items.push({id: $scope.items.length});
        if($scope.items.length==100)
        {
            $scope.moredata=true;
        }
      $scope.$broadcast('scroll.infiniteScrollComplete');
    };

    $scope.items=[];
    $scope.sbusiness = [];
    $scope.nearbyB = [];
    
    $scope.nearByBusinesses = function() {
        $scope.nearbyB.push({id:$scope.nearbyB.length,data:sampleData[0]});
        if($scope.nearbyB.length == 5) {
            $scope.moredata = true;
        }
        $scope.$broadcast('scroll.infiniteScrollComplete');
        $ionicLoading.hide();
    }
    
    $scope.suggestedBusinesses = function() {
    }
    
    //  modal //
    $scope.postreviewmodal;
    $scope.selectedPlace;
    $scope.rev;
    $scope.viewbusiness = function(place) {
        $scope.selectedPlace = place;
          $ionicModal.fromTemplateUrl(
            'templates/addreview/modal/postreview.html', {
                scope: $scope,
                animation: 'slide-in-up'
          }).then(function(modal) {
            $scope.postreviewmodal = modal;
            $scope.postreviewmodal.show();
          });
        $scope.selectedPlace = place;
    }
    
    $scope.postreview = function() {
        console.log($scope.selectedPlace);
        console.log($scope.rev);
    }
    
    //  Reviews of the place
    $scope.businessreviews = function() {
        console.log($scope.selectedPlace);
        
    }
    
  $scope.ratingsObject = {
            iconOn: 'ion-ios-star',    //Optional
            iconOff: 'ion-ios-star-outline',   //Optional
            iconOnColor: 'rgb(200, 200, 100)',  //Optional
            iconOffColor:  'rgb(200, 100, 100)',    //Optional
            rating:  2, //Optional
            minRating:1,    //Optional
            readOnly: true, //Optional
            callback: function(rating) {    //Mandatory
              $scope.ratingsCallback(rating);
            }
          };

  $scope.ratingsCallback = function(rating) {
    console.log('Selected rating is : ', rating);
  };
    
    
});