import { postSeq } from "../database/seqConnection.js";

const isDeleting =async (req, res, next) => { 
    const id = req.params.id;
    await postSeq.findOne({where: {id}})
    .then(async (data) => {
        if (data) {
            await postSeq.update(
                { isDeleted: true },
                {where: {id}})
        }
        next()
    })
    .catch((err)=>{return res.status(404).json({message:"Error Occured at deletePost"})})
}
const checkPost =async (req, res, next) => { 
    const id = req.params.id;
    await postSeq.findOne({where: {id}})
    .then(async (data) => {
        if (!data) return res.status(404).json({ message: "index not found" })
        else if(data.isDeleted) return res.status(200).json({message:"post Not Found Or Already Deleted"})
            next()
    })
    .catch((err)=>{return res.status(404).json({message:"Error Occured at checkPost"})})
    
}
export{isDeleting,checkPost}