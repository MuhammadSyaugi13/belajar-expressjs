const express = require('express')
const router = express.Router()
const db = require('../config/database/mysql')
const controller = require('../controller/indexController')

/*get all data dengan sequelize*/
router.get('/', controller.mahasiswa.getAll)
router.get('/export-excel', controller.exportExcel.exportToExcel)

/*get all data tanpa sequelize*/
// router.get('/', (req, res, next) => {
//     var sql = 'SELECT * FROM mahasiswa'
//     db.query(sql, (err, result) => {
//         if (err) throw err;

//         res.status(200).json({
//             message: 'Get method mahasiswa',
//             data: result
//         })
//     })
// })

//tambah data
router.post('/', (req, res, next) => {

    const mahasiswa = {
        nim: req.body.nim,
        nama: req.body.nama,
        email:req.body.email
    } 
    let sql = `INSERT INTO mahasiswa (nim, nama, email) VALUES ('${mahasiswa.nim}', '${mahasiswa.nama}', '${mahasiswa.email}')`

    db.query(sql, (err, result) => {
        if (err) throw err;

        res.status(200).json({
            message: 'Berhasil menginput data mahasiswa'
        })
    })
})

//ambil data berdasarkan nim dengan request query
router.get('/search', (req, res, next) => {
    const nim = req.query.nim

    var sql = `SELECT * FROM mahasiswa WHERE nim=${nim}`
    db.query(sql, (err, result) => {
        if (err) {
            throw err
        }

        if (result.length > 0) {
            res.status(200).json({
                message: 'Get method mahasiswa',
                data: result
            })
            
        }

        res.status(200).json({
            message: 'Data mahasiswa kosong',
            data: result
        })

    })
})

// ubah data
router.put('/', (req, res, next) => {

    const mahasiswa = {
        nim: req.body.nim,
        nama: req.body.nama,
        email:req.body.email
    } 
    let sql = `UPDATE mahasiswa SET nama='${mahasiswa.nama}', email='${mahasiswa.email}' WHERE nim=${mahasiswa.nim}`

    db.query(sql, (err, result) => {
        if (err) throw err;

        res.status(200).json({
            message: 'Berhasil mengubah data mahasiswa'
        })
    })
})

//hapus data
router.delete('/:nim', (req, res, next) => {

    const nim = req.params.nim
    let sql = `DELETE FROM mahasiswa where nim=${nim}`

    db.query(sql, (err, result) => {
        if (err) throw err;

        res.status(200).json({
            message: 'Berhasil menghapus data mahasiswa'
        })
    })
})

// ekspor data ke excel


module.exports = router