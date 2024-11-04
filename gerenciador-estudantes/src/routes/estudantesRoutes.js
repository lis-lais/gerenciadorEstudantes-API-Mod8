const express = require('express');
const router = express.Router();
const {
    adicionarEstudantes,
    listarEstudantes,
    atualizarEstudantes,
    removerEstudantes,
    buscarEstudantes,
} = require('../controllers/estudantesController');

router.post('/', adicionarEstudantes);
router.get('/', listarEstudantes);
router.put('/:id', atualizarEstudantes);
router.delete('/:id', removerEstudantes);
router.get('/buscar', buscarEstudantes);

module.exports = router;
