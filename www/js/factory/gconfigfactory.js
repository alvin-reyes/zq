angular.module('zatiqctrl.datafactory',[])
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