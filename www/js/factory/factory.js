angular.module('zatiqctrl.datafactory', [])
.factory('gconfig',function() {
    
    var apiKey = 'AIzaSyCfp6B83teeIUqhXJ_cgl4U7hOVIqIAHtI';
    var urlPlaces = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json';
    
    //https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=restaurant&name=cruise&key=
    
    return {
        getGooglePlacesAPI : function() {
            return apiKey;
        }
    }
})

.factory('food', function() {
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
    };
})
.factory('nightlife', function() {
    
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
    };
})
.factory('places', function() {
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
.factory('ratingsreviews', function() {
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
.factory('users', function() {
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
