const mahasiswaController = require('./mahasiswaController')
const exportExcelController = require('./exportExcelController')
const controller = {}

controller.mahasiswa = mahasiswaController
controller.exportExcel = exportExcelController

module.exports = controller