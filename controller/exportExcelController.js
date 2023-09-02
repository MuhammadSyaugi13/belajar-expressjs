const model = require('../config/model/indexModel')
const controller = {}
const excelJs = require('exceljs')

const getMahasiswa = async function () {

    let data = ['ayey']
    try {
        await model.mahasiswa.findAll()
        .then((result) => {
            data = result
        })
        return data
        
    } catch (error) {
        console.log(error)
        return error
    }
}

controller.exportToExcel = async (req, res) => {
    
    try {
        

        // dataMahasiswa2.forEach(element => {
        //     console.log(element.nim)
        // });

        // res.status(200).json({
        //     data: 'oke'
        // })

        let workbook = new excelJs.Workbook()

        const sheet = workbook.addWorksheet('Mahasiswa')
        sheet.columns = [
            {header: "Nim", key: 'nim', width: 25},
            {header: "Nama", key: 'nama', width: 25},
            {header: "Email", key: 'email', width: 25},
        ]

        // let dataMahasiswa = [
        //     {nim_key: '202043502623', nama_key: 'Ogi', email_key: 'ogi@gmail.com'},
        //     {nim_key: '202043502214', nama_key: 'andi', email_key: 'andi@gmail.com'},
        //     {nim_key: '202043506436', nama_key: 'ani', email_key: 'ani@gmail.com'},
        // ]
        const dataMahasiswa = await getMahasiswa() 

        await dataMahasiswa.map((value, index) => {
            sheet.addRow({
                nim: value.nim,
                nama: value.nama,
                email: value.email,
            })
        })

        res.setHeader(
            "Content-type",
            "application/vnd.openxmlformats-officedocument.spreadsheethtml.sheet"
        )

        res.setHeader(
            "Content-Disposition",
            "attachment;filename="+"exportData.xlsx"
        )

        workbook.xlsx.write(res)

    } catch (error) {
        console.log(`error export excel : ${error}`)
    }
} 


module.exports = controller