// import { port } from "../../config/"
import { createConnection } from "mysql2/promise"
import app from "../../app"
import sequelize from "sequelize";

let connection, server;

beforeEach(async()=>{
    connection = await sequelize()
    await connection.synchronize()
    server = app.listen(7000)
})




it("simple test", ()=>{
    expect(1+1).toBe(2)
})