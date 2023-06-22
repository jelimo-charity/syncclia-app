import express from 'express'
import config from './src/db/config.js'
import bodyParser from 'body-parser'
import { synccliaRoutes } from './src/routes/synccliaRoutes.js'
import cors from 'cors'
import jwt from 'jsonwebtoken'
const app = express()

//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
//jwt middleware
app.use((req, res, next) => {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jwt.verify(req.headers.authorization.split(' ')[1], config.jwt_secret, (err, decode) => {
            if (err) req.user = undefined;
            req.user = decode;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
});

 app.use(bodyParser.json())

 synccliaRoutes(app);

 app.get('/', (req,res)=>{
    res.send("hello, welcome to syncclia");
 })

 app.listen(config.port, ()=>{
    console.log(` The server is running at ${config.url}`);
 });

