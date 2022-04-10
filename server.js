const express = require("express")
const app =express()
const port= 3000

userdata=[


userdata1 ={
    "first_name": "khubaib",
    "last_name":'hanif',
    "course":"blockchain"
},

userdata2={
    "first_name": "taha",
    "last_name":'khan',
    "course":"blockchain"

},

userdata3={
    "first_name": "ahsan",
    "last_name":'siddqui',
    "course":"blockchain"
}
]



app.get("/", (req,res)=>{
    res.send(userdata)


})

app.get("/profile1", (req,res)=>{
    res.send(userdata1)
})


app.get("/profile2", (req,res)=>{
    res.send(userdata2)
})


app.get("/profile3", (req,res)=>{
    res.send(userdata3)
})

app.listen(port,()=>{
    console.log("server is running");
})
