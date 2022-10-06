const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mysql = require('mysql');


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'argonautes',
})


app.use(cors());
app.use(express.json()); /* Pour retourne string */
app.use(bodyParser.urlencoded({extended: true}));



app.get('/api/get', (req, res) => {

    const sqlSelect = "SELECT * FROM equipage"
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    })
})

/* Method POST pour envoye les donnée */
app.post('/api/insert', (req, res) =>{
    const nom = req.body.nom ;

    const sqlInsert = "INSERT INTO equipage (nom) VALUES (?)"
    db.query(sqlInsert, [nom], (err, result) => {
        console.log(err);
    })
});


/* Teste base de donnée */


/* app.get('/', (req, res) =>{
    
    const sqlInsert = "INSERT INTO name (name) VALUES ('Pedro') "
    db.query(sqlInsert, (err, result) => {
    res.send('Hello Pedro');  
    }) 
}) */


/* run server in this port */
app.listen(3001, () => {
    console.log('running on port 3001');
});