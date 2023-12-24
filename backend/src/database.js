const mongoose = require('mongoose');

// Reemplaza 'tu_cadena_de_conexion' con la cadena de conexión proporcionada por MongoDB Atlas
const uri = 'mongodb+srv://badulake:eafu2001@cluster0.d1l69fu.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Conexión exitosa a MongoDB Atlas');
});

// Manejo de errores de conexión
connection.on('error', (err) => {
    console.error('Error de conexión a MongoDB Atlas:', err);
});