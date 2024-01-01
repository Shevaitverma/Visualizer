import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import dataRoute from './routes/data.route.js';


const app = express();
dotenv.config();

app.use(cors());
app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))


// test server 
app.use('/test', (req, res)=>{res.send("working")})

// loading the routes
app.use('/api', dataRoute)


app.listen(process.env.PORT || 4001, () => {
    console.log(`Server is running at port : ${process.env.PORT}`);
});
