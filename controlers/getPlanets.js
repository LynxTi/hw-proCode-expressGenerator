const axios = require('axios');

const  getPlanets = async (id) => {
    const url = 'https://swapi.dev/api/planets/' + id + '/';
    const { data } = await axios.get(url);

    return data;
  }

module.exports = {
    getPlanets
}