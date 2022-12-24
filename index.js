/*
using express and serving files

const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    let fileName=req.query.fileName;

    res.download(`./files/${fileName}`,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log('File downloaded');
        }
    })

})

app.listen(3000,()=>console.log('Server started om 3000'));*/


