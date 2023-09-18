require('dotenv').config();

const express = require('express');
const ExpressError = require('./utils/ExpressError');
const mongoose = require('mongoose');
const cors = require('cors');

const dbUrl = process.env.DB_URL;

mongoose.set('strictQuery', false);

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const app = express();

const carRoutes = require('./routes/car');
const brandRoutes = require('./routes/brand');

app.use(cors({
    origin: '*'
}));

app.use('/cars', carRoutes);
app.use('/brands', brandRoutes);

app.get('/', (req, res) => {
    res.send('home');
});

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found', 404));
});

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Something went wrong!';
    res.status(statusCode).send(err);
});

const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Serving on port ${port}`);
});
