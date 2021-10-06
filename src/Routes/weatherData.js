const express = require('express');
const router = express.Router();

const connection = require('../Routes/Database');

//Routers for all the get and post solicitudes
router.get('/city', (req, res) => {

    connection.query('SELECT code FROM city', (err, rows, fields) => {
        if (!err) {
            res.json(rows);

        } else {
            console.log(err);
        }
    })
});


router.post('/city/code', async (req, res) => {
    console.log(req.body);
    json1 = req.body; //Se reciben los datos mandados
    connection.query('SELECT code FROM city c WHERE c.code = ? ', [json1.code], function (error, result) { //Se realiza el query
        if (error) {
            throw error;
        } else {

            for (j = 0; j < result.length; j++) {//For para obtener el/los datos del query y definir la var

                if (result[j].code === '200') {
                    res.send("Ingresa");
                    console.log('Ingreso');
                } else {
                    res.send("Constraseña invalida");
                    console.log('NoIngreso');
                }
            }


        }
    })
});




router.get('/city/:code', (req, res) => {
    var id = req.params.code;
    connection.query('SELECT city_name FROM city c WHERE c.code = ? ', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows);

        } else {
            console.log(err);
        }
    })
});

router.get('/weatherS/:code', (req, res) => {
    var id = req.params.code;
    connection.query('SELECT state FROM weather w, city c where w.id_weatherCity = c.id_city  AND c.code = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }

    });
});

router.get('/temperature/:code', (req, res) => {
    var id = req.params.code;
    connection.query('SELECT temp FROM temperature t, city c where t.id_tempWeather = c.id_city  AND c.code = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }

    });
});

router.get('/humidity/:code', (req, res) => {
    var id = req.params.code;
    connection.query('SELECT humidity FROM temperature t, city c where t.id_tempWeather = c.id_city  AND c.code = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }

    });
});

router.get('/wind/:code', (req, res) => {
    var id = req.params.code;
    connection.query('SELECT speed FROM wind wi, city c where wi.id_windWeather = c.id_city  AND c.code = ?', [id], (err, rows, fields) => {
        if (!err) {
            res.json(rows[0]);
        } else {
            console.log(err);
        }

    });
});



module.exports = router;