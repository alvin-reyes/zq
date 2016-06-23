angular.module('zatiqctrl.datafactory', [])

.factory('users', function() {
    
    var users = [
        {item:[{id:0,text:'',likes:[],meta:[]}]},
        {item:[{id:0,text:'',likes:[],meta:[]}]},
        {item:[{id:0,text:'',likes:[],meta:[]}]},
    ];

    return {
        allUsers: function(user) {
          return users;
        },
        get: function(userId) {
          for (var i = 0; i < chats.length; i++) {
            if (chats[i].id === parseInt(chatId)) {
              return chats[i];
            }
          }
          return null;
        }
    };
});
