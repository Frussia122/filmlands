const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index');
const errorMiddleware= require('./middlewares/error-middleware');

DB_URL ='mongodb+srv://root:k46KovkUKwl3U8bk@cluster0.hf3bmfc.mongodb.net/?retryWrites=true&w=majority';

const PORT = 5000;
const app = express()

app.use(express.json());
app.use(cookieParser());
app.use(cors());
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