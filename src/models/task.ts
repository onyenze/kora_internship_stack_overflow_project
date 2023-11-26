// In task.ts
import { Model, DataTypes } from 'sequelize';
import sequelize from "../config/dbconfig";
import User from "./user"; 

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
