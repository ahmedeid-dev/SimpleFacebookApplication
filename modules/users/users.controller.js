import { userSeq } from "../../database/seqConnection.js";
import bcrypt  from 'bcryptjs';

const signUp = async (req, res) => {
    await userSeq.create(req.body)
        .then((data) => {
    res.status(201).json({ message: "registered successfully...." });
    })
};

const signIn = async (req, res) => {
    const user = await userSeq.findOne({
        where: {
            email: req.body.email,
        },
    })
        return res.status(200).json({ message: "Login .... Token",userId:user.id ,isLogged:user.isLogged});
};


const logOut = async (req, res) => {
    const user = await userSeq.findOne({
        where: {
            email: req.body.email,
        },
    })
    return res.status(200).json({ message: "Logged Out ....", isLogged: user.isLogged });
};

export {
    signUp,
    signIn,
    logOut
};
