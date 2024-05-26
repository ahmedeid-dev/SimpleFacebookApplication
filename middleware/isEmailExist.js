import { userSeq } from "../database/seqConnection.js";
import  bcrypt  from 'bcryptjs';


// Check if the email exists
const isEmailExist =async (req, res,next) => {
    let hash = bcrypt.hashSync(req.body.password, 8);
    req.body.password = hash;

    const userExists = await userSeq.findOne({
        where: { email:req.body.email }
    });
    if (userExists) {
        return res.status(400).json({message:'Email is already associated with an account'});
    }
    next()
}
//check email in login
const checkEmail =async (req, res, next) => {
    await userSeq.findOne({
        where: {
            email: req.body.email,
        },
    })
    .then(async (data) => {
if (data.length != 0) {

let match= bcrypt.compareSync(req.body.password,data.dataValues.password)
if (!match) return res.status(401).json({ message: "Wrong Email Or Password " });
else {
    await userSeq.update(
        { isLogged: true },
        {
            where: {
            email: req.body.email,
            },
        },
    )
}
}
})
.catch((err) => {
    if (err) return res.status(401).json({ message: "Error Occured At SignIn" });
});

    next()
}

//check email in logout
const isLoggingOut =async (req, res, next) => {
    await userSeq.findOne({
        where: {
            email: req.body.email,
        },
    })
    .then(async (data) => {

if (data.length != 0) {
    await userSeq.update(
        { isLogged: false },
        {
            where: {
            email: req.body.email,
            },
        },
    )
}
})
.catch((err) => {
    if (err) return res.status(401).json({ message: "Error Occured At logOut" });
});

    next()
}
export {
    isEmailExist,
    checkEmail,
    isLoggingOut
}