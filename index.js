let express= require('express');//import package
let app= express();   //create object of express
let hrroutes=require('./routes/hr_route');

app.use("/api/hr",hrroutes);  //use the route

//run the server

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})