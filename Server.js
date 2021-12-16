const express = require('express')

const app = express()

const port = 5000

const Middleware =(req,res,next)=>{
    console.log('inesines')
    next()
}

app.use(Middleware)

// app.get('/',(req,res)=>{
//     res.send('Ines')
// })

// app.get('/Balise',Middleware,(req,res)=>{
//     res.send('<h1>Marwen Ines</h1>')
// })

// app.get('/Products',(req,res)=>{
//     // console.log(__dirname)
//     res.sendFile(__dirname+'/Public/Products.html')
// })

// app.get('/Samsung',(req,res)=>{
//     res.sendFile(__dirname+'/Public/')
// })

// app.get('/style.css',(req,res)=>{
//     res.sendFile(__dirname+'/Public/style.css')
// })


app.use(express.static('Public'))

app.listen(port,console.log('Server is running'))