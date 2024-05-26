import { Router } from "express";
import { createPost, deletePost, readPost, readPosts, updatePost } from "./posts.controller.js";
import { checkPost, isDeleting } from "../../middleware/idDeleting.js";
const postRouter =Router();

postRouter.post('/create',createPost).get("/",readPosts).get('/:id',readPost).put('/update/:id',updatePost).delete('/delete/:id',checkPost,isDeleting,deletePost)
export default postRouter;