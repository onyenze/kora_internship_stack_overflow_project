'use strict';
import {
  Model,
  Optional,
  DataTypes
}  from'sequelize';

interface UserAttributes{
  id:number
  firstName:string
  lastName:string
  email:string
  password:string
  userId: string;
  image?: string;
  token?: string;
  verifyCode: string;
  isVerified?: boolean;
  updatedAt?: Date;
  createdAt?: Date;
}

type optionalUserAttributes = Optional<
  UserAttributes,
  | "id"
  | "createdAt"
  | "verifyCode"
  | "updatedAt"
  | "token"
  | "image"
  | "isVerified"
  | "verifyCode"

>;

module.exports = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttributes, optionalUserAttributes> implements UserAttributes{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    declare id: number;
  declare userId: string;
  declare firstName: string;
  declare lastName: string;
  declare email: string;
  declare password: string;
  declare phoneNumber: string;
  declare isVerified: boolean;
  declare image: string;
  declare token: string;
  declare verifyCode: string;
  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;
    static associate(models: any) {
      // define association here
      User.belongsToMany(models.Task,{
        through: "Tasks"
      })
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      verifyCode: {
        type: DataTypes.STRING,
        defaultValue: false,
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      }
    },
    {
      sequelize,
      timestamps: true,
      tableName: "Users",
    }
  );
  return User;
};