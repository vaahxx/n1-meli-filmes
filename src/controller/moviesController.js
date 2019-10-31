// acesso a camada model
const movies = require('../model/filmes.json');

exports.get = (req, res) => {
    return res.status(200).send(movies);
};
exports.getDirector = (req, res) => {
    const diretorParam = req.params.diretor;
    const director = movies.filter(m => m.director == diretorParam);
    return res.status(200).send(director);
};
exports.getGenre = (req, res) => {
    const generoParam = req.params.genero;
    const genre = movies.filter(m => m.genre.includes(generoParam));
    return res.status(200).send(genre);
};