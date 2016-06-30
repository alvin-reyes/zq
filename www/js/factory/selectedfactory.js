angular.module('zatiqctrl.datafactory')
.factory('selectedfactory',function() {
    
    var selBusiness = null;
    
    return {
        getSelectedBusines : function() {
            return selBusiness;
        },
        setSelectedBusiness : function(place) {
            selBusiness = place;
            return this;
        },
    }
})