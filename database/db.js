const mongoose = require('mongoose');
const url="mongodb://localhost:27017/project-assignment";
const db=mongoose.connect(url,
    { useCreateIndex: true, useFindAndModify: true, useNewUrlParser: true, useUnifiedTopology: true }).catch((e) => { console.log("error to connect with database") }).then(console.log("connected with database"))
module.exports=db;