'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Task extends sequelize_1.Model {
        static associate(models) {
            // define association here
            Task.belongsToMany(models.User, {
                through: "TaskAssignments"
            });
        }
    }
    Task.init({ id: {
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
        }, }, {
        sequelize,
        modelName: 'Task',
    });
    return Task;
};
