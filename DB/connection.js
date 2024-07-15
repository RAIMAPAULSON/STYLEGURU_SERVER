const mongoose = require('mongoose')
const connectionString = process.env.CONNECTION_STRING
mongoose.connect(connectionString).then((res)=>{
    console.log("Style guru server connected with MongoDB");
}).catch((err)=>{
    console.log("Connection failed");
    console.log(err);
})