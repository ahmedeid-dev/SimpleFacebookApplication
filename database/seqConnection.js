import { DataTypes, Sequelize } from "sequelize";
import  bcrypt  from 'bcryptjs';

// Connecting to a local database
// export const seq = new Sequelize(
//     // `mysql://ug4emv9iuwlpd79f:JSuLLIJ3MUAWGaQGkKiR@brvq3mcqe2jcbqqlrqxm-mysql.services.clever-cloud.com:3306/brvq3mcqe2jcbqqlrqxm`,
//     `brvq3mcqe2jcbqqlrqxm`,`root`,``,
//     {
//         host:`localhost`,
//         dialect: "mysql"
//     }
//     );

// !كمل هنا
// Connecting to a clever-cloud database
export const seq = new Sequelize(
    // `mysql://ug4emv9iuwlpd79f:JSuLLIJ3MUAWGaQGkKiR@brvq3mcqe2jcbqqlrqxm-mysql.services.clever-cloud.com:3306/brvq3mcqe2jcbqqlrqxm`,
    `brvq3mcqe2jcbqqlrqxm`,`ug4emv9iuwlpd79f`,`JSuLLIJ3MUAWGaQGkKiR`,
    {
        host:`brvq3mcqe2jcbqqlrqxm-mysql.services.clever-cloud.com`,
        dialect: "mysql",
        port:3306
    }
    );
    
export const userSeq = seq.define(`user`, {
    username: DataTypes.STRING,
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    password: DataTypes.STRING,
    isLogged: {
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
}, {
        instanceMethods: {
            generateHash(password) {
                return bcrypt.hash(password, bcrypt.genSaltSync(8));
            },
            validPassword(password) {
                return bcrypt.compare(password, this.password);
            }
        }
    })

    
    export const postSeq = seq.define(`post`, {
        title:DataTypes.STRING,
        content:DataTypes.STRING,
        authorId: {
            type: DataTypes.INTEGER,
            references: {
                model: { tableName: 'users' },
                key: 'id'
            }
        },
        isDeleted: {
            type: DataTypes.BOOLEAN,
            defaultValue:false
    }

    })

export const commentSeq = seq.define(`comment`, {
    content: DataTypes.STRING,
    postId: {
        type: DataTypes.INTEGER,
        references: {
            model: { tableName: 'posts' },
            key: 'id'
        }
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: { tableName: 'users' },
            key: 'id'
        }
    }
})

seq.authenticate()
    .then(() => console.log("Connection has been established successfully."))
    .catch((error) => console.error("Unable to connect to the database:", error));
seq.sync({
    // alter:true
    // force:true
});

// Associations
// userSeq.hasMany(postSeq);
// userSeq.hasMany(commentSeq);
// postSeq.belongsTo(userSeq);
// postSeq.hasMany(commentSeq);
// commentSeq.belongsTo(userSeq);
// commentSeq.belongsTo(postSeq);
