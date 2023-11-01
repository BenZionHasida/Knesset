// dependcies
import express from  'express'
import cors from 'cors'
import mongoose from 'mongoose'
import 'dotenv/config'

// routers
import connectionRouter from './routers/connection.js'

// router -------------------------------
// app variable
const app = express()

// middle ware
// allows request from 2 ports in the localhost
app.use(cors())

// allows 'send.json()'
app.use(express.json())

//  log all the request (path and method)
app.use((req,res,next)=>{
    console.log(req.path,req.method);
    next()
})

// routers
// route connection area
app.use('/connection',connectionRouter)




// server is listening
app.listen(process.env.PORT,()=>{
    console.log('server listening on port '+process.env.PORT);
})

// db --------------------------------------
// connect to db
mongoose.connect(process.env.DATABASE_STRING)

// connection variable
const db = mongoose.connection

// log once db connected or got error
db.on('error',(e) => console.error(e))
db.once('open',()=> console.log('connected to database'))





