const { Pool } = require('pg');
const configPG = require('../configs/db.config');

class PgDatabase{
    constructor(){
        this.pool=new Pool({
            host: configPG.host,
            port : configPG.port,
            user: configPG.user,
            password:configPG.password,
            database:configPG.database,
            ssl:{
                rejectUnauthorized:false,
            },
            max: 20,
            idleTimeoutMillis:3000,
            connectionTimeoutMillis:2000,
        });
    }
    async connectDB(){
        try{
            const client= await this.pool.connect();
            console.log("Connected to the database successfully!");
            client.release();
        }catch (error){
            console.log("Error connecting to the database: ",Error);
        }
    }
}

module.exports= new PgDatabase();