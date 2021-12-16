const express = require('express')

const app = express()

const port = 5000

var users = [
    {id : 1,name : 'ines', age:'18'},
    {id : 2,name : 'mohamed', age:'10'},
    {id : 3,name : 'marwen', age:'50'},
    {id : 4,name : 'seif', age:'30'},
]

app.use(express.json())

app.get('/ReadUsers',(req,res)=>{
    res.send(users)
})

app.post('/AddUser',(req,res)=>{
    users = [...users,req.body]
    res.send({users,Msg :'User Added'})
})

app.delete('/DeleteUser/:id',(req,res)=>{
    const {id} = req.params
    users = users.filter(user=> user.id != id)
    res.send({users,Msg :'User Deleted'})
})

app.put('/UpdateUser/:id',(req,res)=>{
    const {id} = req.params
    users = users.map(user=> user.id == id ? {...user,...req.body} : user)
    res.send({users,Msg :'User Updated'})
})

app.listen(port,console.log('Server is running'))