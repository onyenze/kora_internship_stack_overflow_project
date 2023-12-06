// import { port } from "../../config/"
import request from "supertest";
import app from "../../app"
import sequelize from "../../config/dbconfig";
import db from "../../models"
let connection:any, server:any;

beforeEach(async()=>{
    connection  = await db.sequelize(); 
    await connection.sync()
    server = app.listen(8000)
})



afterAll( () => {
     connection.close();
     server.close()
  });


  
it("should get all users", async()=>{
    const response = await request(app).get("/users")
})





it("simple test", ()=>{
    expect(1+1).toBe(2)
})


