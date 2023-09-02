const model = require('../config/model/indexModel')
const controller = {}

controller.getAll = async function (req, res) {
    try {
        await model.mahasiswa.findAll()
        .then((result) => {
            if (result.length > 0) {
                res.status(200).json({
                    message: "Get Method mahasiswa",
                    data: result
                })
            }else{
                res.status(200).json({
                    message: "Tidak ada data mahasiswa",
                    data: []
                })
            }
        })
    } catch (error) {
        res.status(404).json({
            message: error
        })
    }
}

module.exports = controller