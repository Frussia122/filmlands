const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index');
const errorMiddleware= require('./middlewares/error-middleware');

DB_URL ='mongodb+srv://root:k46KovkUKwl3U8bk@cluster0.hf3bmfc.mongodb.net/?retryWrites=true&w=majority';

const PORT = 5000;
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
// }
const app = express()

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:'https://filmlands.vercel.app', 
    credentials:true
}));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin','https://filmlands.vercel.app');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
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
