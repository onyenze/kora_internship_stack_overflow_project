// In task.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/dbconfig";
import User from "./user"; 
import { setCache, getCache } from '../utils/cache';

interface TaskAttributes {
  id?: number;
  title: string;
  description: string;
}

class Task extends Model<TaskAttributes> implements TaskAttributes {
  id!: number;
  title!: string;
  description!: string;

  static associate(models: any) {
    // define association here
    Task.belongsToMany(User, {
      through: "TaskAssignments"
    });
  }


  // Function to create a task and set it in the cache
  static async createTaskWithCache(taskData: TaskAttributes) {
    const createdTask = await this.create(taskData);
    setCache(`task:${createdTask.id}`, createdTask.toJSON());
    return createdTask;
  }


  // Function to get a task by ID with cache
  static async getTaskByIdWithCache(taskId: number) {
    const cachedTask = await getCache(`task:${taskId}`);
    if (cachedTask) {
      return cachedTask;
    }

    const task = await this.findByPk(taskId);
    if (task) {
      setCache(`task:${taskId}`, task.toJSON());
    }

    return task;
  }



}

const TaskModel = Task.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Task', // Set modelName to 'Task'
});

// Optionally, you can define hooks, scopes, etc. here.

export default TaskModel;
