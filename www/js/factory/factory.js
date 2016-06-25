angular.module('zatiqctrl.datafactory', [])

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
});
