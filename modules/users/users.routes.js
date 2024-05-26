import {Router} from "express";
import { signIn, logOut, signUp } from "./users.controller.js";
import { checkEmail, isEmailExist, isLoggingOut } from "../../middleware/isEmailExist.js";
const userRouter =Router();

userRouter.post('/signup',isEmailExist,signUp).post("/signin",checkEmail,signIn).post("/logout",isLoggingOut,logOut)

export default userRouter;