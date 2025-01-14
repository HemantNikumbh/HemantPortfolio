require("dotenv").config();
const express = require("express")
const cors = require("cors");
const app = express();
const router = require("./router/auth_router")
const ContactRoute = require("./router/contact-router")
const connectDb = require("./utils/db");
const adminRoute = require("./router/admin-router")
const errorMiddleWare = require("./server/validator/middleware/errr-middleware");
const serviceRoute = require("./router/service-route")

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
app.use("/api/data",serviceRoute)
app.use("/api/admin",adminRoute)
app.use(errorMiddleWare);


connectDb().then(()=>{
app.listen(5000,()=>{
    console.log("server is created");

});
});
  