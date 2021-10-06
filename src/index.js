const express = require('express'); //Importing express
const app = express();//execute Express
var cors = require('cors');//Require cors

//Settings
app.set('port', process.env.PORT || 8080);

//Middlewares
app.use(express.json());
app.use(cors())

//Routes
app.use(require('./Routes/weatherData'));

//Starting server
app.listen(app.get('port'),() =>{
    console.log('Server on port',app.get('port'));
    });