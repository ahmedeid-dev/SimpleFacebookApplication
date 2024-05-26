import { postSeq } from "../../database/seqConnection.js";

const createPost = (req, res) => {
    postSeq.create(req.body)
        .then((data) => {
            res.status(201).json({ message: "post created successfully"})
        })
    .catch((err)=> res.status(404).json({message:"Error Occured at createPost"}))
}

const readPosts = (req, res) => {
    postSeq.findAll()
    .then((data) => res.status(200).json({ message: "success",data }))
    .catch((err)=> res.status(404).json({message:"Error Occured at readPosts"}))
    
}
const readPost = (req, res) => {
    const id = req.params.id;
    postSeq.findByPk(id)
    .then((data) => res.status(200).json({ message: "success",data }))
    .catch((err)=> res.status(404).json({message:"Error Occured at readPost"}))

}
const updatePost = (req, res) => {
    const id = req.params.id;
    postSeq.update(req.body, {
        where: {
        id
    }})
        .then((data) => {
            if (data[0]) return res.status(200).json({ message: "updated successfully" })
                return res.status(404).json({ message: "index not found" })
            
        })
    .catch((err)=> res.status(404).json({message:"Error Occured at updatePost",err}))
}
// actual Delete
// const deletePost = (req, res) => {
//     const id = req.params.id;
//     postSeq.destroy({where:{id}})
//         .then((data) => {
//             if (data) return res.status(200).json({ message: "deleted successfully" })
//                 return res.status(404).json({ message:"index not found" })
//     })
//     .catch((err)=> res.status(404).json({message:"Error Occured at deletePost",err}))
// }
// soft Delete
const deletePost =async (req, res) => {
    const id = req.params.id;
    await postSeq.findOne({where: {id}})
        .then(async (data) => {
            console.log(data);
            return res.status(200).json({ message: "deleted successfully" })
    })
}

export {
    createPost,
    readPosts,
    readPost,
    updatePost,
    deletePost
}