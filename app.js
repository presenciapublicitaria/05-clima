const lugares = require('./lugar/lugar');
const climas = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

// lugares.getLugarLatLon(argv.direccion)
//     .then(console.log);

// climas.getClima(40.75, -74.00)
//     .then(console.log);

// argv.direccion

const getInfo = async(direccion) => {

    try {
        const coordenadas = await lugares.getLugarLatLon(direccion);

        const temperatura = await climas.getClima(coordenadas.lat, coordenadas.lon);

        return `El clima de ${coordenadas.ubicacion} es de ${temperatura}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);