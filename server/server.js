const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const { userRoute } = require('./routes/userRoute')


dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => {
    console.log("Connected to MongoDB!")
});

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.use('/api', userRoute);

app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
})
