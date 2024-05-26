import { Router } from "express";
import { createComment,readComments,readComment,updateComment,deleteComment } from "./comments.controller.js";

const commentRouter = Router();
commentRouter.post('/create',createComment).get("/",readComments).get('/:id',readComment).put('/update/:id',updateComment).delete('/delete/:id',deleteComment)

export default commentRouter;