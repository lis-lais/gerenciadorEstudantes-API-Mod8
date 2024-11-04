const {
    adicionarEstudanteRepo,
    listarTodosRepo,
    encontrarPorIdRepo,
    atualizarRepo,
    removerRepo,
    buscarRepo,
} = require('../repositories/estudantesRepository');

function adicionarEstudanteService({ nome, matricula, curso, ano }) {
    if (!nome || !matricula || !curso || !ano) {
        return { sucesso: false, mensagem: 'Todos os campos são obrigatórios.' };
    }

    const novoEstudante = {
        id: Date.now().toString(),
        nome: nome.trim(),
        matricula: matricula.trim(),
        curso: curso.trim(),
        ano: parseInt(ano),
    };

    adicionarEstudanteRepo(novoEstudante);
    return { sucesso: true, estudante: novoEstudante };
}

function listarEstudantesService() {
    return listarTodosRepo();
}

function atualizarEstudanteService(id, { nome, matricula, curso, ano}) {
    const estudante = encontrarPorIdRepo(id);
    if (!estudante) {
        return { sucesso: false, mensagem: 'Estudante não encontrado.' };
    }

    const estudanteAtualizado = {
        ...estudante,
        nome: nome ? nome.trim() : estudante.nome,
        matricula: matricula? matricula.trim() : estudante.matricula,
        curso: curso? curso.trim() : estudante.curso,
        ano: ano? parseInt(ano) : estudante.ano,
    };

    atualizarRepo(id, estudanteAtualizado);
    return { sucesso: true, estudante: estudanteAtualizado };
}

function removerEstudanteService(id) {
    const estudante = encontrarPorIdRepo(id);
    if (!estudante) {
        return { sucesso: false, mensagem: 'Estudante não encontrado.' };
    }

    removerRepo(id);
    return { sucesso: true };
}

function buscarEstudanteService({ nome, matricula, curso }) {
    return buscarRepo({ nome, matricula, curso });
}

module.exports = {
    adicionarEstudanteService,
    listarEstudantesService,
    atualizarEstudanteService,
    removerEstudanteService,
    buscarEstudanteService,
}
