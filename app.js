const express = require('express')
const app = express()
const port = 3000
const morgan = require('morgan')
const bodyParser = require('body-parser')

const mahasiswaRoutes = require('./routes/mahasiswa')

// app.use((req,res,next) => {
//     res.status(200).json({
//         message:"Restfull api nodejs express"
//     })
// })

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/mahasiswa', mahasiswaRoutes)

app.use((req, res, next) => {
    const error = new Error("tidak ditemukan")
    error .status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})

module.exports = app


//mysql
// const mysql = require('mysql')
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'telesales'
//   })

// app.get('/', (req, res) => {
//     // res.send('hello world')
//     res.sendFile('./index.html', {root: __dirname})
// })

// app.get('/about', (req, res) => {
//     res.sendFile('./about.html', {root: __dirname})
// })

// app.get('/contact', (req, res) => {
//     res.sendFile('./contact.html', {root: __dirname})
// })

// app.get('/product/:id', (req, res) => {
//     res.send(`Product ID: ${req.params.id} <br> Category: ${req.query.category}`)
//     // res.sendFile('./contact.html', {root: __dirname})
// })

// app.get('/database', (req, res) => {
//     connection.connect()
    
//     connection.query('SELECT * FROM ussers', (err, rows, fields) => {
//     if (err) {
//         return res.status(500).json({ message: 'Ada kesalahan', error: err });
//     }
    
//     res.status(200).json({success: true, data: rows})
//     })

//     connection.end()
// })

// // error handler
// app.use('/', (req, res) => {
//     res.status(404)
//     res.send('<h2>404</h2>')
//   })


// app.listen(port, () => {
//     console.log(`listening on port 3000.....`)
// })

// ==============================================================================

// const http = require('http')
// const fs = require('fs')
// const port = 3000

// const renderHTML = (path, res) => {
//     fs.readFile(path, (err, data) => {
//         if (err) {
//             res.writeHead(404)
//             res.write('Error: file not found')
//         }else{
//             res.write(data)
//         }
//         res.end()
//     })
// }

// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     })

//     const url = req.url

//     switch (url) {
//         case '/about.html':
//             renderHTML('./about.html', res)
//             break;

//         case '/contact.html':
//             renderHTML('./contact.html', res)
//             break;
    
//         default:
//             renderHTML('./index.html', res)
//             break;
//     } 

// }).listen(port, () => {
//     console.log(`server is  listening on port ${port}....`)
// })