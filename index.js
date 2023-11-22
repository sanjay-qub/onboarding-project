const express= require ("express")
const dotenv=require("dotenv")
dotenv.config();
const router=require('./src/routes/userRoutes')

const cors=require("cors")
// server.use(cors({origin:"http://localhost:3000"}))
const server=express()
server.use(express.json())
server.use(router)
const db = require("./src/config/db");

const port=process.env.PORT || 8080;

server.listen(port, (err) => {
    if (err) {
        console.error("Error starting server:", err);
    } else {
        console.log(`Server started at http://localhost:${port}`);
    }
});
