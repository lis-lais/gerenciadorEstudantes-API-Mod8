const {
    adicionarEstudanteService,
    listarEstudantesService,
    atualizarEstudanteService,
    removerEstudanteService,
    buscarEstudanteService,
} = require('../services/estudantesService');

function adicionarEstudantes(req, res) {
    const { nome, matricula, curso, ano } = req.body;
    const resultado = adicionarEstudanteService({ nome, matricula, curso, ano });

    if (resultado.sucesso) {
        res.status(201).json(resultado.estudante);
    } else {
        res.status(400).json({ message: resultado.mensagem });
    }
}

function listarEstudantes(req, res) {
    const estudantes = listarEstudantesService();
    res.json(estudantes);
}

function atualizarEstudantes(req, res) {
    const id = req.params.id;
    const { nome, matricula, curso, ano } = req.body;
    const resultado = atualizarEstudanteService(id, { nome, matricula, curso, ano });

    if (resultado.sucesso) {
        res.json(resultado.estudante);
    } else {
        res.status(404).json({ message: resultado.mensagem });
    }
}

function removerEstudantes(req, res) {
    const id = req.params.id;
    const resultado = removerEstudanteService(id);

    if (resultado.sucesso) {
        res.json({ message: 'Estudante removido com sucesso.'});
    } else {
        res.status(404).json({ message: resultado.mensagem });
    }
}

function buscarEstudantes(req, res) {
    const { nome, matricula, curso } = req.query;
    const resultados = buscarEstudanteService({ nome, matricula, curso });

    if (resultados.sucesso) {
        res.json(resultados);
    } else {
        res.status(404).json({ message: resultados.mensagem });
    }
}

module.exports = { adicionarEstudantes, listarEstudantes, atualizarEstudantes, removerEstudantes, buscarEstudantes };
