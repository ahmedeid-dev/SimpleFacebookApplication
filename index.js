import express from "express";
import cors from "cors"
import userRouter from "./modules/users/users.routes.js";
import postRouter from "./modules/posts/posts.routes.js";
import commentRouter from './modules/comments/comments.routes.js';

const app = express();
const port = 3000;
app.use(express.json())
app.use(cors());

app.use("/users", userRouter).use('/posts',postRouter).use('/comments',commentRouter)

app.get("/", (req, res) => res.status(200).json({message:"Hello World!"}));
app.use("*", (req, res) => res.status(404).json({message:"4 0 4 Not Found"}));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
