import { Router } from "express";

const taskRoute = Router()


import { updateTask,deleteTask,getOneTask,getAllTask, createTask } from "../controllers/task.controller";


taskRoute.route("/task/createTask").put( createTask);

taskRoute.route("/task/one/:id").put( getOneTask);

taskRoute.route("/task/all").put( getAllTask);

taskRoute.route("/task/update/:id").put( updateTask);

taskRoute.route("/task/delete/:id").put( deleteTask);

export default taskRoute

