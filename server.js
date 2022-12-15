const express= require("express");
require("dotenv").config();
const app=express();
const connectDB = require("./db/conn");
const cookieParser=require("cookie-parser");
const path = require("path");

connectDB();
const Products=require("./models/productsSchema");
const DefaultData=require("./defaultdata");
const cors=require("cors");
const router=require("./routes/router");
require("./db/conn");
app.use(express.json());
app.use(cookieParser(""));
app.use(cors());
app.use(router);
const port= process.env.PORT ||  8005;


// For deployment 
// if(process.env.NODE_ENV==="production"){
//     app.use(express.static("client/build"));
// }
const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/client/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "client", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
    
});
DefaultData();