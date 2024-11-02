class authModel {
    createUser(username, password){
        return users.push({username,password});
    }
}

module.exports = authModel;