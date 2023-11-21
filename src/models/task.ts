'use strict';
import {
  Model
}  from 'sequelize';

interface TaskAttributes{
  id:number
  title:string
  status:["Completed","Unassigned","Incomplete"]
}
module.exports = (sequelize:any, DataTypes:any) => {
  class Task extends Model<TaskAttributes> implements TaskAttributes{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!:number
    title!: string;
    status!: ['Completed', 'Unassigned', 'Incomplete'];


    static associate(models:any) {
      // define association here
      Task.belongsToMany(models.User, {
        through: "TaskAssignments"
      })
    }
  }
  Task.init({id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },}, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};