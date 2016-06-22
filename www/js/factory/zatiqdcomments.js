angular.module('zatiqctrl.datafactory', [])

.factory('comments', function() {
    
    var comments = [
        {item:[{id:0,text:'',likes:[],meta:[]}]},
        {item:[{id:0,text:'',likes:[],meta:[]}]},
        {item:[{id:0,text:'',likes:[],meta:[]}]},
    ];

    return {
        allComments: function(user,item) {
          return comments;
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
