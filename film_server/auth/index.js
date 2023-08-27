const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index');
const errorMiddleware= require('./middlewares/error-middleware');
const httpProxy = require('express-http-proxy');

DB_URL ='mongodb+srv://root:k46KovkUKwl3U8bk@cluster0.hf3bmfc.mongodb.net/?retryWrites=true&w=majority';

const PORT = 5000;
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
// }
const app = express()

app.use(express.json());
app.use('/api', httpProxy('https://rich-red-bull-hose.cyclic.cloud', {
    proxyReqPathResolver: (req) => `/api${req.url}`
}));
app.use(cookieParser());
app.use(cors({
    origin:'https://filmlands.vercel.app', 
    credentials:true
}));
app.use('/api',router);
app.use(errorMiddleware);

const start = async () =>{
    try{
        await mongoose.connect(DB_URL , {
           useNewUrlParser: true,
           useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    }catch (e){
        console.log(e);
    }
}
start()
