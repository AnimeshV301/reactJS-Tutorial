const express = require ("express")
const cors  = require ("cors")
const mongodb = require("mongodb")
const bodyparser = require("body-parser")

const app = express();
app.use(cors () );
//set the json as MIME type
app.use( bodyparser.json());
//read the json data
app.use(bodyparser.urlencoded({extended:false}))
//craete ref variable to connect mongodb datavase
const mongoose = mongodb.MongoClient;
app.post("/login",(req,res)=>{
    mongoose.connect("mongodb+srv://animeshv301:Dog@cat4@cluster0.r8ivj.mongodb.net/React_data?retryWrites=true&w=majority",{useUnifiedTopology: true,useUnifiedTopology :true},(err,connection)=>{
        if(err) throw err;
        else{
            const db =connection.db("React_data")
            db.collection("login_details").find({"uname":req.body.uname,"upw":req.body.upw}).toArray((err,array)=>{
                if(err)throw err;
                else{
                    if(array.length>0){
                        res.send({"login":"success"});
                    }
                    else{
                        res.send({"login":"fail"});
                    };
                }
            })

        }
    })
});
app.listen(8080,()=>{
    console.log("server run on 8080")
})