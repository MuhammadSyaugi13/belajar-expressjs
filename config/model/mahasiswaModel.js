const Sequelize = require("sequelize");
const db = require('../database/mysql')

var mahasiswa = db.define('mahasiswa', 
{
    nim: Sequelize.STRING,
    nama: Sequelize.STRING,
    email: Sequelize.STRING,
},{

    freezeTableName: true,
    timestamps: false

}
);

module.exports = mahasiswa