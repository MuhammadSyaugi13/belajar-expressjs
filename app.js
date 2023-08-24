const express = require('express')
const app = express()
const port = 3000

//gunakan ejs
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    // res.sendFile('./index.html', {root: __dirname})
    const mahasiswa  = [
        {nama: "andi", npm:'2020435027345'},
        {nama: "ira", npm:'20204350272342'},
    ]
    res.render('index', {nama: "Muhammad Syaugi", mahasiswa})
})

app.get('/about', (req, res) => {
    // res.sendFile('./about.html', {root: __dirname})
    res.render('about')
})

app.get('/contact', (req, res) => {
    // res.sendFile('./contact.html', {root: __dirname})
    res.render('contact')
})

app.get('/product/:id', (req, res) => {
    res.send(`Product ID: ${req.params.id} <br> Category: ${req.query.category}`)
    // res.sendFile('./contact.html', {root: __dirname})
})

// error handler
app.use('/', (req, res) => {
    res.status(404)
    res.send('<h2>404</h2>')
  })


app.listen(port, () => {
    console.log(`listening on port 3000.....`)
})

