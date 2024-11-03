const users = require("../../../data/dummy/auth.dummy");

class authModel {
    createUser(username, password){
        return users.push({username,password});
    }

    getUser(username){
        return users.find((user)=>user.username ===username);
    };
}

module.exports = new authModel;