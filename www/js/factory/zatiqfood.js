angular.module('zatiqctrl.datafactory', [])

.factory('food', function() {
    
    var food = [
        {id:0,type:'food',name:'Food 1',desc:'This is a food',
         img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1920px-Good_Food_Display_-_NCI_Visuals_Online.jpg',meta:[]},
        {id:1,type:'food',name:'Food 2',desc:'This is a food',
         img:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Foods_%28cropped%29.jpg/1024px-Foods_%28cropped%29.jpg',meta:[]}
    ];

    return {
        getFoods: function() {
            return food;
        }
    };
});
