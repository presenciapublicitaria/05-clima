const lugares = require('./lugar/lugar');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

lugares.getLugarLatLon(argv.direccion)
    .then(console.log);
// argv.direccion