require('dotenv').config();
const mysql = require('mysql2');

const connect = () => {
    const db = mysql.createConnection({
        host     :   process.env.DB_HOST,
        user     :   process.env.DB_USER,
        password :   process.env.DB_PASS,
        database :   process.env.DB_NAME
    });

    db.connect((err) => {
        if (err) throw err;
        console.log('Conexión correcta con mysql')
    });
};

module.exports = () => { connect(); };

//CONSULTAS EN MYSQL
// GET
// db.query('SELECT * FROM Users;', (err, results) => {
//     if(err) throw err;
//     console.log(results);
// })
// INSERT
// db.query('INSERT INTO Users SER', (err,rows) => {
//     if(err) throw err;
//     console.log(`Insersion correcta`)
// })

// app.get('/', (req,res) => {
//     db.query('SELECT * FROM Users', (err,results) => {
//         if(err) throw err;
//         res.json(results)
//     })
// })

// app.get('/api/:table', (req,res) => {
//     const table = req.params.table;
//     db.query(`SELECT * FROM Users`, (err,results) => {
//         if(err) throw err;
//         res.json(results)
//     })
// })