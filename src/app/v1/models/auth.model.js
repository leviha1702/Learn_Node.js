const users = require("../../../data/dummy/auth.dummy");
const pgDatabase = require("../../../database/pg.database");

class authModel {
    createUser(username, password){
        return users.push({username,password});
    }

    async getUser(username){
        const result = await pgDatabase.pool.query(
            "SELECT * FROM users WHERE username =$1",[username]
        );
        return result.rows[0];
    }
}

module.exports = new authModel;