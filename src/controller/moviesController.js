// acesso a camada model
const movies = require('../model/filmes.json');
const fs = require('fs');

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
    res.status(200).send(genre);
    console.log(genre);
};
exports.post = (req, res) => {
    const {title, year, director, duration, genre, rate} = req.body;
    movies.push({title, year, director, duration, genre, rate});
    fs.writeFile("./src/model/filmes.json", JSON.stringify(movies), 'utf8', (err) => {
        if (err) {
            return res.status(500).send({ message:err });
        }
        console.log('file was saved!')
    });
    return res.status(201).send(movies);    
};
exports.postGenreToMovie = (req, res) => {
    const novoGenero = req.params.novoGenero
    movies[0].genre.push(novoGenero);
    fs.writeFile("./src/model/filmes.json", JSON.stringify(movies), 'utf8', (err) => {
        if (err) {
            return res.status(500).send({ message:err });
        }
        console.log('file was saved!')
    });
    return res.status(201).send(movies);
};