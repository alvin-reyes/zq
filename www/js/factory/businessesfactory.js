angular.module('zatiqctrl.datafactory')
.factory('businessfactory',function() {
    
    var popularcategories = [
        {id:0,name:'Hot New Businesses',meta_code:['hot','new']},
        {id:1,name:'Delivery',meta_code:['deliver','delivery']},
        {id:2,name:'Restaurants',meta_code:['restaurtants','food','lunch','breakfast','dinner']},
        {id:3,name:'Bars',meta_code:['bars','rave','music', 'sports']},
        {id:4,name:'Nightlife',meta_code:['nightlife','night']},
        {id:5,name:'Coffee & Tea',meta_code:['cafe','coffee']},
        {id:6,name:'Gas & Service Stations',meta_code:['gas','service']},
        {id:7,name:'Drugstores',meta_code:['drug','pharmacy']},
        {id:8,name:'Shopping',meta_code:['shop','items']}
    ];
    var morecategories = '';
    
    return {
        getPopularCategories : function() {
            return popularcategories;
        },
        getGooglePlacesUrl : function() {
            return urlPlaces;
        }
    }
})