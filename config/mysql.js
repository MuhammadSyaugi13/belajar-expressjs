var mysql = require('mysql')

var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "",
    database: "universitas"
})

conn.connect(function (err) {
    if(err) throw err;
    console.log('koneksi berhasil')
})

module.exports = conn