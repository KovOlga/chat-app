import express, { Application } from "express";
import prisma from '../prisma/dbclient'

const PORT  = process.env.PORT || 5000;
const app: Application = express();

const startServer = async () =>{
    try {
        await prisma.$connect();
        console.log('connected')
        const server = app.listen(PORT, ()=>{
            console.log(`server is running on port ${PORT}`)
        })
    } catch (err){
        console.log('err')
    }
}

startServer()