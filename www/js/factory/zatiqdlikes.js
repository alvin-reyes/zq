angular.module('zatiqctrl.datafactory', [])

.factory('likes', function() {
    
    var likes = [
        {item:[{id:0,user:'',meta:[]}]},
        {item:[{id:0,user:'',meta:[]}]},
        {item:[{id:0,user:'',meta:[]}]},
    ];

    return {
        allLikes: function(user,item) {
          return likes;
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
