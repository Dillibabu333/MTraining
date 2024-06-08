const express = require("express");

const app =express();

const connect=require("./config/db");

app.use(express.json());


const userController=require("./controllers/userController");
const postController=require("./controllers/postController");
const tagController=require("./controllers/tagController");
const commentController=require("./controllers/commentController");

app.use("/user", userController );
app.use("/post", postController );
app.use("/tag", tagController );
app.use("/comment", commentController );


app.listen(5000, async function(){
    try{
        await connect();
        console.log("listening on port 5000 !")
       }
       catch(e){
        console.error(e);
       }
})