const express = require("express")
const morgan = require("morgan")
const cors = require("cors")
const mongoose = require("mongoose")
require("dotenv").config()

const  app = express()

//middleware set 
app.use(express.json())// set rest API useig json
app.use(cors())
app.use(morgan("dev"))


//route 
app.get("*",(req,res)=>{
    res.json({
        data:"message from server"
    })
})

const port = process.env.PORT || 8080

app.listen(port,()=>console.log(`start server by port ${port}`))