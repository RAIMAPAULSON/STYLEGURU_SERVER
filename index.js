//Loads .env file contents into process.env by default
require('dotenv').config()
const express = require('express')
const cors = require('cors')
require('./DB/connection')
const router = require('./routes/router')

const styleServer = express()

styleServer.use(cors())
styleServer.use(express.json())
styleServer.use(router)


const PORT = 3000 || process.env.PORT

styleServer.listen(PORT,()=>{
    console.log(`STYLE Server started at port : ${PORT}`);
})

styleServer.get('/',(req,res)=>{
   res.status(200).send(`<h1 style='color:red;'>STYLESERVER started, and waiting for client request!!!</h1>`)
})