const express = require('express');
const router = express.Router();
const controller = require('../controller/moviesController');

// ao encontrar a rota, chama o método dentro do arquivo controller
router.get('/', controller.get);
router.post('/', controller.post);
router.get('/diretores/:diretor', controller.getDirector);
router.get('/generos/:genero', controller.getGenre);
router.post('/adicionar-genero/:novoGenero', controller.postGenreToMovie);

module.exports = router;