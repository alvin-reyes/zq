angular.module('zatiqctrl.datafactory', [])

.factory('business', function() {
    
    var wallitems = [
        {item:[{id:0,type:'review',comments:[],likes:[],meta:[]}]},
        {item:[{id:1,type:'review',comments:[],likes:[],meta:[]}]},
        {item:[{id:2,type:'review',comments:[],likes:[],meta:[]}]},
    ];

    return {
        allWallItems: function(user) {
          return wallitems;
        },
        allReviews: function(user) {
            return wallitems;
        },
        allLikes: function(user) {
            return wallitems;
        },
        remove: function(chat) {
          chats.splice(chats.indexOf(chat), 1);
        },
        get: function(chatId) {
          for (var i = 0; i < chats.length; i++) {
            if (chats[i].id === parseInt(chatId)) {
              return chats[i];
            }
          }
          return null;
        }
    };
});
