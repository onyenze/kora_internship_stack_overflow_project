"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import fileUpload from "express-fileupload";
const user_route_1 = __importDefault(require("./routers/user.route"));
const task_route_1 = __importDefault(require("./routers/task.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Welcome to my Stack Overflow Project!");
});
app.use("/api/v1", user_route_1.default);
app.use("/api/v1", task_route_1.default);
app.all("*", (req, res, next) => {
    res.status(404).json({
        message: `Error 404 this route ${req.originalUrl} not found in this Server!`
    });
});
exports.default = app;
