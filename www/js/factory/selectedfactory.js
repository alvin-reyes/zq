angular.module('zatiqctrl.datafactory')
.factory('selectedfactory',function() {
    var selBusiness = null;
    var selCategory = null;
    return {
        getSelectedBusiness : function() {
            return selBusiness;
        },
        getSelectedCategory : function() {
            return selCategory;
        },
        setSelectedBusiness : function(place) {
            selBusiness = place;
            console.log(place);
            return this;
        },
        setSelectedCategory : function(cat) {
            selCategory = cat;
            return this;
        }
    }
})