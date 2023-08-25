const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const router = require('./router/index');
const errorMiddleware= require('./middlewares/error-middleware');

DB_URL ='mongodb+srv://root:k46KovkUKwl3U8bk@cluster0.hf3bmfc.mongodb.net/?retryWrites=true&w=majority';

const PORT = 5000;


var allowedOrigins = ['http://localhost:3000',
'http://yourapp.com'];
app.use(cors({
origin: function(origin, callback){
// allow requests with no origin
// (like mobile apps or curl requests)
if(!origin) return callback(null, true);
if(allowedOrigins.indexOf(origin) === -1){
var msg = 'The CORS policy for this site does not ' +
'allow access from the specified Origin.';
return callback(new Error(msg), false);
}
return callback(null, true);
}
})); 
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true

// }
const app = express()

app.use(express.json());
app.use(cookieParser());
// app.use(cors(corsOptions));
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