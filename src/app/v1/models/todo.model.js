const pgDatabase = require("../../../database/pg.database");
const todoService = require("../services/todo.service");

class todoModel {
    static async getTodos(){
        const result = await pgDatabase.pool.query(
            "SELECT * FROM todos"
        );
        return result.rows;
    }
    static async getTodosWithUsers(){
        const result = await pgDatabase.pool.query(
            `SELECT todos.id, todos.title, todos.completed, users.name AS user_name, users.email AS user_email
            From todo
            JOIN users ON todos.user_id = users.id`
        );
        return result.rows;
    }
    //Get a specific todo by ID
    static async getTodoById (todoId){
        const result = await pgDatabase.pool.query(
            `SELECT
                todos.id AS todo_id,
                todos.title,
                todos.completed,
                users.id AS user_id,
                users.name AS user_name,
                users.email AS user_email
            FROM todos
            jOIN users ON todos.user_id = users.id
            WHERE todos.id = $1`,
            [todoId]
        );
        return result.rows[0];
    }
    //Create a new todo
    static async createTodo(title, userId){
        const result= await pgDatabase.pool.query(
            "INSERT INTO todos (title,user_Id) VALUES ($1,$2) RETURNING *",
            [title,userId]
        );
        return result.rows[0];
    }
    static async updateTodo(userId,name,email){
        try{
            const fields = [];
            const values = [];
            let query = "UPDATE todos SET";

            if(title !== undefined){
                fields.push(`title = $${fields.length+1}`);
                values.push(title);
            }
            if(completed !== undefined){
                fields.push(`completed = $${fields.length+1}`);
                values.push(completed);
            }
            if(userId !== undefined){
                fields.push(`user_id = $${fields.length+1}`);
                values.push(userId);
            }
            query += fields.join(",");
            query += `WHERE id = $${fields.length+1} RETURNING *`;
            values.push(todoId);

            const result = await pgDatabase.pool.query(query, values);
            
            return result.rows[0];
        } catch(error){
            console.log(error);
        }
    }
    static async deleteUser(userId){
        try{
            const result= await pgDatabase.pool.query(
            "DELETE FROM users WHERE id = $1 RETURNING *",
            [todoId]
            );
            return result.rows[0];
        } catch (error){
            console.log(error);
        }
    }
}

module.exports = todoModel;