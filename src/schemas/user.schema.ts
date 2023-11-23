import zod, { ZodSchema, object, string } from "zod";
import { UserAttributes } from "../interfaces/user.interface";



export const userSignUpSchema: ZodSchema<UserAttributes> = object({
  firstName: string({
    required_error: "First Name is required!"
  }).nonempty().min(2).regex(/^[a-zA-Z\s]+$/, 'First name can only contain letters'),
  lastName: string({
    required_error: "Last Name is required!"
  }).nonempty().min(2).regex(/^[a-zA-Z\s]+$/, 'First name can only contain letters'),
  password: string({
    required_error: "Password is required."
  }).nonempty().min(6, "Password must be at-least six (6) characters long"),
  email: string({
    required_error: "email is required."
  }).nonempty().min(2).email("Invalid email format"),
});