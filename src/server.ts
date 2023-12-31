import app from "./app";
import sequelize from "./config/dbconfig";
import logger from "./utils/logger";
import dotenv from "dotenv";
dotenv.config();

import db from "./models"
import TaskModel from "./models/task";

const port = process.env.PORT;


db.sequelize.sync({alter:true}).then(() => {
  logger.info("Database connected!!")
}).then(() => {
  app.listen(port || 4000, () => {
    logger.info(`App listening on port: ${port}`);
  });
}).catch((error:any) => {
  console.log(`Failed to connect`)
  logger.error(error.message)
})
console.log("work");


process.on("SIGINT", async () => {
  await sequelize.close();
  logger.info("Server closed");
  process.exit(0);
});

