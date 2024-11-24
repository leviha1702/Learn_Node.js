const pgDatabase = require("../../../database/pg.database");

class userModel {
    static async getUsers(){
        const result = await pgDatabase.pool.query(
            "SELECT * FROM users"
        );
        return result.rows;
    }
    static async getUser(userId){
        const result = await pgDatabase.pool.query(
            "SELECT * FROM users WHERE id =$1",[userId]
        );
        return result.rows[0];
    }
    static async createUser(name, email){
        const result= await pgDatabase.pool.query(
            "INSERT INTO users (name,email) VALUES ($1,$2) RETURNING *",
            [name,email]
        );
        return result.rows[0];
    }
    static async updateUser(userId,name,email){
        const result= await pgDatabase.pool.query(
            "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
            [name,email,userId]
        );
        return result.rows[0];
    }
    static async deleteUser(userId){
        try{
            const result= await pgDatabase.pool.query(
            "DELETE FROM users WHERE id = $1 RETURNING *",
            [userId]
            );
            return result.rows[0];
        } catch (error){
            console.log(error);
        }
    }
}

module.exports = userModel;