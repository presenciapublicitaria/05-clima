const axios = require('axios');

const getClima = async(latitud, longitud) => {

    const respu = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=b4f01caf75678148119bf9a575886181&units=metric`)

    return respu.data.main.temp;

}

module.exports = {
    getClima
}