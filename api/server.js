import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import { setupApis } from './api/api'

let app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    next();
});

setupApis(app);


(async () => {
    try {
        await mongoose.connect('mongodb://localhost/stores',{ useNewUrlParser: true });
        console.log('mongo connected');
    } catch(e) {
      console.error(e)
    }
  })()

app.listen(5000, () => {
    console.log('server started - 5000');
});