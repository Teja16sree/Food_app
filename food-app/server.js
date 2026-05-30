const express = require('express');
const colors = require('colors');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');

//dot en configuration
dotenv.config();

//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

//route
app.use("/api/v1/test" , require("./routes/testRoutes")) ;

app.get('/',(req,res) => {
    return res.status(200).send("<h1> Welcome to food server APP API based project </h1>");
});
//URL: http://localhost:8080

//port
const PORT = process.env.PORT || 8080;

//listen
app.listen(PORT , () => {
    console.log(`Server running on ${PORT}`.bgMagenta.white);
});
