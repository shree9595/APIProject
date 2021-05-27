const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");



//routes
const categoryRoutes = require("./routes/category")
const productRoutes = require("./routes/product")

//DB Connection
mongoose
    .connect("mongodb://localhost:27017/APIProject", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    .then(() => {
        console.log("DB CONNECTED");
    });

//Middlewares
app.use(bodyParser.json());
app.use(cors());



//routes
app.use('/api', categoryRoutes)
app.use('/api', productRoutes)

//port
const port = 8000;

//Starting a server
app.listen(port, () => {
    console.log(`app is running at ${port}`);
});
