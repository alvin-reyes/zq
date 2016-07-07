angular.module('zatiqctrl.datafactory')
.factory('ratingsangreviewfactory',function(gconfigfactory) {
    
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
            reviews.push({'id':reviewandrating.length+1,'user':user,'review':review,'place': place});
            return this;
        },
        
        saveRating : function(user,place,rating) {
            reviews.push({'id':reviewandrating.length+1,'user':user,'rating':rating,'place': place});
            return this;
        }
    }
})