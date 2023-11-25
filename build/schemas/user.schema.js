"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSignUpSchema = void 0;
const zod_1 = require("zod");
exports.userSignUpSchema = (0, zod_1.object)({
    firstName: (0, zod_1.string)({
        required_error: "First Name is required!"
    }).nonempty().min(2).regex(/^[a-zA-Z\s]+$/, 'First name can only contain letters'),
    lastName: (0, zod_1.string)({
        required_error: "Last Name is required!"
    }).nonempty().min(2).regex(/^[a-zA-Z\s]+$/, 'First name can only contain letters'),
    password: (0, zod_1.string)({
        required_error: "Password is required."
    }).nonempty().min(6, "Password must be at-least six (6) characters long"),
    email: (0, zod_1.string)({
        required_error: "email is required."
    }).nonempty().min(2).email("Invalid email format"),
});
