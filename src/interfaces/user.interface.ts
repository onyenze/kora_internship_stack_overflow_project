export interface UserAttributes{
  id?:number
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