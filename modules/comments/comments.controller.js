import { commentSeq } from "../../database/seqConnection.js";

const createComment = (req, res) => {
    commentSeq.create(req.body)
        .then((data) => res.status(201).json({ message: "post created successfully" }))
    .catch((err)=> res.status(404).json({message:"Error Occured at createComment",error:err.original.sqlMessage}))
}

const readComments = (req, res) => {
    commentSeq.findAll()
    .then((data) => res.status(200).json({ message: "success",data }))
    .catch((err)=> res.status(404).json({message:"Error Occured at readComments"}))
    
}
const readComment = (req, res) => {
    const id = req.params.id;
    commentSeq.findByPk(id)
    .then((data) => res.status(200).json({ message: "success",data }))
    .catch((err)=> res.status(404).json({message:"Error Occured at readComment"}))

}
const updateComment = (req, res) => {
    const id = req.params.id;
    commentSeq.update(req.body, {
        where: {
        id
    }})
        .then((data) => {
            if (data[0]) return res.status(200).json({ message: "updated successfully" })
                return res.status(404).json({ message: "index not found" })
            
        })
    .catch((err)=> res.status(404).json({message:"Error Occured at updateComment",err}))

}
const deleteComment = (req, res) => {
    const id = req.params.id;
    commentSeq.destroy({where:{id}})
        .then((data) => {
            if (data) return res.status(200).json({ message: "deleted successfully" })
                return res.status(404).json({ message:"index not found" })
    })
    .catch((err)=> res.status(404).json({message:"Error Occured at deleteComment",err}))

}
export {
    createComment,
    readComments,
    readComment,
    updateComment,
    deleteComment
}