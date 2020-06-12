const axios = require('axios');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

console.log(argv.direccion);

const instance = axios.create({
    method: 'GET',
    baseURL: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
    headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
        "x-rapidapi-key": "000eb22cc7msh02cad54653d3614p18f8cfjsn64a88d5d32e9",
        "useQueryString": true
    },
    params: {
        "location": "New York",
        "status": "New York"
    }

});

instance.get()
    .then(resp => {
        console.log(resp);
    })
    .catch(err => {
        console.log('Error...!!!', err);
    });