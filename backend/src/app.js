const express = require('express')
const cors = require('cors')
const app = express();

//se configura el servidor
app.set('port', process.env.PORT || 4000)

module.exports = app;