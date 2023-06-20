import express from 'express'
import config from './src/db/config.js'
import bodyParser from 'body-parser'
import { synccliaRoutes } from './src/routes/synccliaRoutes.js'


const app = express()
 app.use(bodyParser.json())

 synccliaRoutes(app);

 app.get('/', (req,res)=>{
    res.send("hello, welcome to syncclia");
 })

 app.listen(config.port, ()=>{
    console.log(` The server is running at ${config.url}`);
 });

