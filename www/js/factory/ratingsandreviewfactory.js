angular.module('zatiqctrl.datafactory')
.factory('ratingsandreviewfactory',function(gconfigfactory) {
    
    var reviews = null;
    var ratings = null;
    
    return {
        getUserReview : function(user) {
            return reviews;
        },
        getUserRatings : function(user) {
            return ratings;
        },
        saveReview : function(user,place,review) {
            reviews.push({'id':reviews.length+1,'user':user,'review':review,'place': place});
            
            //  call a promise here and pass it to the backend.
            return this;
        },
        
        saveRating : function(user,place,rating) {
            reviews.push({'id':ratings.length+1,'user':user,'rating':rating,'place': place});
            
            //  call a promise here and pass it to the backend.
            return this;
        }
    }
})