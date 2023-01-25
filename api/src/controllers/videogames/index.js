const { Videogame } = require('../../db');
const { API_KEY } = process.env;

async function listGames () {
    getAllGamesApi = async(videogames =[]) => await Promise.allSettled([ //le ponemos como valor por defecto el videogames para así tener un array contenedor de videojuegos sin necesidad de que me pasen un parámetro 
    axios.get(`${API_URL_GAMES}=${API_KEY}&page=1`,axiosConfig),
    axios.get(`${API_URL_GAMES}=${API_KEY}&page=2`,axiosConfig),
    axios.get(`${API_URL_GAMES}=${API_KEY}&page=3`,axiosConfig),
    axios.get(`${API_URL_GAMES}=${API_KEY}&page=4`,axiosConfig),
    axios.get(`${API_URL_GAMES}=${API_KEY}&page=5`,axiosConfig),
])
    .then(values =>{     
        return [respuesta1, respuesta2, respuesta3, respuesta4, respuesta5] = values}) //guardamos los resultados de cada promesa en un array 
    .then(info => {
        return info.map(promiseRes=> promiseRes.value.data.results)}) // recorremos el array con las promesas resueltas, y por cada una de ellas nos metemos a la información directa de cada juego para solo quedarnos con la info que necesitamos
    .then(info => {
        return info.map(promiseRes => promiseRes.map(game => { // Ahora solo nos guardamos la información necesaria de cada juego en un objeto 
            return{
                idgame: game.id,
                name: game.name,
                released: game.released,
                rating: game.rating,
                img: game.background_image,
                platforms: game.platforms.map(el => [ el.platform.name,el.platform.id]),
                localGenres: game.genres.map(el => el.name)       
       }
   })) 
})
.then(info=> {
    return info.map(array => videogames = videogames.concat(array)) // acá unimos todas las respuestas de las promesas en un solo array
})
.then(info => info = videogames);  // como ahora la información no se ha modificado (modificamos el array pero no la información de las respuestas de la promesas en sí), seteamos la información con la información del array contenedor y lo retornamos 
const games = getAllGamesApi();
return games;
}

module.exports = {
    listGames
}