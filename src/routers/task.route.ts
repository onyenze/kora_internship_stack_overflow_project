import { Router } from "express";

const taskRoute = Router()


import { updateTask,deleteTask,getOneTask,getAllTask, createTask } from "../controllers/task.controller";


taskRoute.route("/task/createTask").post( createTask);


taskRoute.route("/task/one/:id").get( getOneTask);

taskRoute.route("/task/all").get( getAllTask);

taskRoute.route("/task/update/:id").put( updateTask);

taskRoute.route("/task/delete/:id").delete( deleteTask);

export default taskRoute

