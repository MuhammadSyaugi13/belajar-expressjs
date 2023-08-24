const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Get method mahasiswa'
    })
})

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Post method mahasiswa'
    })
})

module.exports = router