const axios = require('axios');

const getLugarLatLon = async(direccion) => {

    const encodeUrl = encodeURI(direccion);

    // console.log(encodeUrl);

    const instance = axios.create({
        method: 'GET',
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodeUrl}&appid=b4f01caf75678148119bf9a575886181`

    });


    const resp = await instance.get();

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para ${direccion} `);
    }

    const data = resp.data;
    const ubicacion = data.name;
    const lat = data.coord.lat;
    const lon = data.coord.lon;

    instance.get()
        .then(resp => {
            console.log(resp.data.coord.lon);
        })
        .catch(err => {
            console.log('Error...!!!', err);
        });

    return {
        ubicacion,
        lat,
        lon
    }

}


module.exports = {
    getLugarLatLon
}