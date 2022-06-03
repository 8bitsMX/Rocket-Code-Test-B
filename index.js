'use strict'
const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 3001;
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://srendon:20141530@cluster0-hjkav.azure.mongodb.net/Pro35?retryWrites=true&w=majority',{useNewUrlParser:true , useFindAndModify: false, useCreateIndex: true, useUnifiedTopology: true })
.then(() => {
        console.log('Conexión Con Mongo Atlas Establecida');
        app.listen(port, () => {
            console.log('http://localhost:' + port);
        });
    });



