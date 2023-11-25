"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.updateTask = exports.getOneTask = exports.getAllTask = exports.createTask = void 0;
const task_1 = __importDefault(require("../models/task"));
const createTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, description } = req.body;
        const taskData = {
            title,
            status: "Incomplete",
            description
        };
        const newTask = new task_1.default(taskData);
        yield newTask.save();
        res.status(201).json({
            message: "Success",
            data: newTask
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
exports.createTask = createTask;
const getAllTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const AllTasks = yield task_1.default.findAll();
        if (!AllTasks) {
            return res.status(404).json({
                message: "Task not found"
            });
        }
        res.status(200).json({
            message: "Success",
            data: AllTasks
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});
exports.getAllTask = getAllTask;
const getOneTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const task = task_1.default.findByPk(req.params.id);
        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }
        res.status(200).json({
            data: task
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});
exports.getOneTask = getOneTask;
const updateTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskId = req.params.id;
        const { title, description } = req.body;
        const task = yield task_1.default.findByPk(taskId);
        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }
        const taskData = {
            title: title || task.title,
            description: description || task.description,
            status: "Incomplete"
        };
        const updatedTask = new task_1.default(taskData);
        yield updatedTask.save();
        res.status(200).json({
            data: updatedTask
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});
exports.updateTask = updateTask;
const deleteTask = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const taskId = req.params.id;
        const task = yield task_1.default.findByPk(taskId);
        if (!task) {
            return res.status(404).json({
                message: "Task not found"
            });
        }
        yield task.destroy();
        res.status(200).json({
            message: "Deleted Successfully"
        });
    }
    catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
});
exports.deleteTask = deleteTask;
