import Task from "../models/task"
import { RequestHandler } from "express";
import { Content } from "mailgen";
import mailGenerator from "../helpers/mail-generator";
import mailSender from "../middlewares/mailservice";
import { TaskAttributes } from "../interfaces/task.interface";


export const createTask : RequestHandler = async (req,res)=>{
    try {
        const {title,description} = req.body
        const taskData: TaskAttributes = {
            title,
            status:"Incomplete",
            description
        }
        const newTask = new Task(taskData)
        await newTask.save()
        res.status(201).json({
            message:"Success",
            data:newTask
        })
    } catch (error:any) {
        res.status(500).json({
            message:error.message
        })
    }
}

export const getAllTask : RequestHandler = async (req,res)=>{
    try {
        const AllTasks = await Task.findAll()
        if(!AllTasks){
            return res.status(404).json({
                message:"Task not found"
            })
        }
        res.status(200).json({
            message:"Success",
            data: AllTasks
        })
    } catch (error:any) {
        res.status(500).json({
            error:error.message
        })
    }
}

export const getOneTask : RequestHandler  = async (req,res)=>{
    try {
        const task = Task.findByPk(req.params.id)
        if(!task){
            return res.status(404).json({
                message:"Task not found"
            })
        }

        res.status(200).json({
            data:task
        })

    } catch (error:any) {
        res.status(500).json({
            error:error.message
        })
    }
}

export const updateTask:RequestHandler = async(req,res)=>{
    try {
       const taskId = req.params.id
       const {title,description} = req.body
       const task= await Task.findByPk(taskId)
       if(!task){
        return res.status(404).json({
            message:"Task not found"
        })
       } 
       const taskData : TaskAttributes = {
        title: title || task.title,
        description : description || task.description,
        status:"Incomplete"
       }
       const updatedTask = new Task(taskData)
       await updatedTask.save()
       res.status(200).json({
        data:updatedTask
       })
    } catch (error:any) {
        res.status(500).json({
            error:error.message
        })
    }
}

export const deleteTask:RequestHandler = async(req,res)=>{
    try {
       const taskId = req.params.id
       const task= await Task.findByPk(taskId)
       if(!task){
        return res.status(404).json({
            message:"Task not found"
        })
       } 
       
       await task.destroy()
       res.status(200).json({
        message:"Deleted Successfully"
       })
    } catch (error:any) {
        res.status(500).json({
            error:error.message
        })
    }
}