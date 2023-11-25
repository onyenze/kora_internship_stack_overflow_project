import { Router } from "express";

import { signUpUser, verifyUserSignUp, forgotPassword ,resetPassword } from "../controllers/user.controller";

import { validateUserSignUp } from "../middlewares/validation";
import { userSignUpSchema } from "../schemas/user.schema";
import { validUser } from "../middlewares/authorization";

const userRoute = Router();


// user signup
userRoute.route("/user").post(validateUserSignUp(userSignUpSchema), signUpUser);

// verify user
userRoute.route("/user").patch(verifyUserSignUp);

// forgot password
userRoute.route("/user/forgotPassword").post( forgotPassword);

// reset password
userRoute.route("/user/resetPassword/:token").put( resetPassword);


export default userRoute; 