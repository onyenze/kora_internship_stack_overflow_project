'use strict';
import {
  Model,
  Optional
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
  class User extends Model<UserAttributes, optionalUserAttributes> {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!:string
    email!:string
    password!:string
    static associate(models: any) {
      // define association here
    }
  }
  User.init({
    id: DataTypes.uui
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};