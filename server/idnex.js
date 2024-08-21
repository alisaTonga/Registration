require('dotenv').config()

const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const app = express()
const router = require('./router/index')

const uri = "mongodb+srv://alisamongodb:IDEALalisa24@speakapp.bnuvv.mongodb.net/?retryWrites=true&w=majority&appName=SpeakApp";
//const uri = process.controll
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use('/api', router);

const start = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.error('Error connecting to MongoDB:', error));

        app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
    } catch (e) {
        console.error(e);
        
    }
}
start()