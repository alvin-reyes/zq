angular.module('zatiqctrl.datafactory', [])
.factory('gconfigfactory',function() {
    
    var apiKey = 'AIzaSyCfp6B83teeIUqhXJ_cgl4U7hOVIqIAHtI';
    var urlPlaces = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
    
    //https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&name=cruise&key=
    
    return {
        getGooglePlacesAPI : function() {
            return apiKey;
        },
        getGooglePlacesUrl : function() {
            return urlPlaces;
        }
    }
})
.factory('foodfactory', function(gconfigfactory,$http,$ionicLoading) {
    var food = [
        {id:0,type:'nightlife',name:'Food1',desc:'This is a Food',
         img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1920px-Good_Food_Display_-_NCI_Visuals_Online.jpg',meta:[]},
        {id:1,type:'nightlife',name:'Food2',desc:'This is a Food',
         img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Foods_%28cropped%29.jpg/1024px-Foods_%28cropped%29.jpg',meta:[]}
    ];

    return {
        getFoods: function() {
            return food;
        },
        getNearbyFoods: function() {
            var lat = 0;
            var long = 0;
            var result = null;
            navigator.geolocation.getCurrentPosition(function (position) {
                lat = position.coords.latitude;
                long = position.coords.longitude;
            
                $ionicLoading.show({
                    template: 'Loading...'
                }).then(function () {
                    console.log("The loading indicator is now displayed");
                });

                console.log(gconfigfactory.getGooglePlacesUrl() + '?location=' + lat +','+long + '&radius=900&type=food,restaurant,cafe,coffee&key=' + gconfigfactory.getGooglePlacesAPI());

                $http(
                    {
                    url:gconfigfactory.getGooglePlacesUrl() + '?location=' + lat +','+long + '&radius=900&type=food&key=' + gconfigfactory.getGooglePlacesAPI(),
                     dataType:'JSONP',
                     method:'GET'
                    }).success(function(res) {
                    result = res;
                    $ionicLoading.hide();
                });
            });
            return result;
        }
    };
})
.factory('nightlifefactory', function(gconfigfactory,$http,$ionicLoading) {
    
    var nl = [
        {id:0,type:'nightlife',name:'Nightlife 1',desc:'This is a NL',
         img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1920px-Good_Food_Display_-_NCI_Visuals_Online.jpg',meta:[]},
        {id:1,type:'nightlife',name:'Nightlife 2',desc:'This is a NL',
         img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Foods_%28cropped%29.jpg/1024px-Foods_%28cropped%29.jpg',meta:[]}
    ];

    return {
        
        getNLs: function() {
            return nl;
        },
        
        getNearByNightlifes: function() {
            var lat = 0;
            var long = 0;
            var result = null;
            navigator.geolocation.getCurrentPosition(function (position) {
                lat = position.coords.latitude;
                long = position.coords.longitude;
            
                $ionicLoading.show({
                    template: 'Loading...'
                }).then(function () {
                    console.log("The loading indicator is now displayed");
                });

                $http(
                    {
                    url:gconfigfactory.getGooglePlacesUrl() + '?location=' + lat +','+long + '&radius=900&type=food&key=' + gconfigfactory.getGooglePlacesAPI(),
                     dataType:'JSONP',
                     method:'GET'
                    }).success(function(res) {
                    result = res;
                    $ionicLoading.hide();
                });
            });
            return result;
        }
    };
})
.factory('placesfactory', function(gconfigfactory,$http,$ionicLoading) {
    var places = [
        {id:0,type:'nightlife',name:'Places 1',desc:'This is a Place',
         img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1920px-Good_Food_Display_-_NCI_Visuals_Online.jpg',meta:[]},
        {id:1,type:'nightlife',name:'Places 1',desc:'This is a Place',
         img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Foods_%28cropped%29.jpg/1024px-Foods_%28cropped%29.jpg',meta:[]}
    ];

    return {
        
        getPlaces: function() {
            return places;
        },
    };
})
.factory('businesssearchfactory',function(gconfigfactory,$http,$ionicLoading){
    
    return {
        searchBusinesses: function(keyword) {
            var lat = 0;
            var long = 0;
            var result = null;
            navigator.geolocation.getCurrentPosition(function (position) {
                lat = position.coords.latitude;
                long = position.coords.longitude;
            
                $ionicLoading.show({
                    template: 'Loading...'
                }).then(function () {
                    console.log("The loading indicator is now displayed");
                });
                
                $http(
                    {
                    url:gconfigfactory.getGooglePlacesUrl() + '?location=' + lat +','+long + '&radius=500&type=food&key=' + gconfigfactory.getGooglePlacesAPI(),
                     dataType:'JSONP',
                     method:'GET'
                    }).success(function(res) {
                    result = res;
                    $ionicLoading.hide();
                });
            });
            return result;
        }
        
    }
})
.factory('ratingsreviewsfactory', function(gconfigfactory,$http,$ionicLoading) {
    
    //  {id:0,meta:'',review:'',rate}
    var ratingsreviews = new Array();
    return {
        getRatings: function() {
            return ratingsreviews;
        },
        addRatings: function(user,item,rating) {
            ratingsreviews.unshift({
                id:0,user:user,item:item,rate:rating.rate,review:rating.review
            });
        }
    };
})
.factory('usersfactory', function(gconfigfactory,$http,$ionicLoading) {
    var users = new Array();
    return {
        getRatings: function() {
            return ratingsreviews;
        },
        addRatings: function(user,item,rating) {
            ratingsreviews.unshift({
                id:0,user:user,item:item,rate:rating.rate,review:rating.review
            });
        }
    };
})
.factory('nearbyfactory',function(gconfigfactory,$http,$ionicLoading) {
    var dData = "";
})
.factory('businesscategoryfactory', function() {
    
})
