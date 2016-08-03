angular.module('zatiqctrl.datafactory',[])
.factory('gconfigfactory',function() {
    
    var apiKey = 'AIzaSyCfp6B83teeIUqhXJ_cgl4U7hOVIqIAHtI';
    var urlPlaces = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
    
    var dev_url = 'http://localhost:8081/';
    var qa_url = '';
    var prod_url = '';
    
    //https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&name=cruise&key=
    
    return {
        getGooglePlacesAPI : function() {
            return apiKey;
        },
        getGooglePlacesUrl : function() {
            return urlPlaces;
        },
        getUrl:function(env) {
            if(env == 'DEV') {return dev_url;}
            else if(env =='QA') {return qa_url;}
            else if(env == 'PROD') {return prod_url;}
        }
    }
})