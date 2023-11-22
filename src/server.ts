import app from "./app";
import sequelize from "./config/dbconfig";
import logger from "./utils/logger";
import dotenv from "dotenv";
dotenv.config();

import db from "./models"

const port = process.env.PORT;

console.log(sequelize);

db.sequelize.sync().then(() => {
  logger.info("Database connected!!")
}).then(() => {
  app.listen(port || 4000, () => {
    logger.info(`App listening on port: ${port}`);
  });
}).catch((error:any) => {
  console.log(`Failed to connect`)
  logger.error(error.message)
})


process.on("SIGINT", async () => {
  await sequelize.close();
  logger.info("Server closed");
  process.exit(0);
});

