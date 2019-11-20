const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');

const apiRoutes=require('./routes/auth');
dotenv.config();

mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true },() => 
console.log('connected to db')
);


app.use(express.json());
app.use('/api', apiRoutes);

app.get('/home', (req, res) => res.send('Hello World with Express'));

app.listen(3000,()=>console.log('server running on 3000'));