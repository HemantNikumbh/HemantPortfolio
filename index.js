require("dotenv").config();
const express = require("express")
const cors = require("cors");
const app = express();
const router = require("./router/auth_router")
const ContactRoute = require("./router/contact-router")
const connectDb = require("./utils/db");
const errorMiddleWare = require("./server/validator/middleware/errr-middleware");

//let's tackel cors

const corsOptions = {
    origin:"http://localhost:5173",
    methods: "GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
};
app.use(cors(corsOptions))

app.use(express.json())
app.use("/api/form",ContactRoute);
app.use("/api/auth",router);
app.use(errorMiddleWare);


connectDb().then(()=>{
app.listen(5000,()=>{
    console.log("server is created");

});
});
  