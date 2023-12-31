"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const validation_1 = require("../middlewares/validation");
const user_schema_1 = require("../schemas/user.schema");
const userRoute = (0, express_1.Router)();
// user signup
userRoute.route("/user").post((0, validation_1.validateUserSignUp)(user_schema_1.userSignUpSchema), user_controller_1.signUpUser);
// verify user
userRoute.route("/user").patch(user_controller_1.verifyUserSignUp);
// forgot password
userRoute.route("/user/forgotPassword").post(user_controller_1.forgotPassword);
// reset password
userRoute.route("/user/resetPassword/:token").put(user_controller_1.resetPassword);
exports.default = userRoute;
