// import { port } from "../../config/"
import { createConnection } from "mysql2/promise"
import app from "../../app"
import sequelize from "../../config/dbconfig";

let connection, server;

beforeEach(async()=>{
    await sequelize.sync(); 
    server = app.listen(7000)
})




it("simple test", ()=>{
    expect(1+1).toBe(2)
})


