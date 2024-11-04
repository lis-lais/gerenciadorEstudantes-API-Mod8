let estudantes = [];

function adicionarEstudanteRepo(estudante) {
    estudantes.push(estudante);
}

function listarTodosRepo() {
    return estudantes;
}

function encontrarPorIdRepo(id) {
    return estudantes.find((estudante) => estudante.id === id);
}

function atualizarRepo(id, estudanteAtualizado) {
    const index = estudantes.findIndex((estudante) => estudante.id === id);
    if (index !== -1) {
        estudantes[index] = estudanteAtualizado;
    }
}

function removerRepo(id) {
    const index = estudantes.findIndex((estudante) => estudante.id === id);
    if (index!== -1) {
        estudantes.splice(index, 1);
    }
}

function buscarRepo({ nome, matricula, curso }) {
    const estudantesFiltrados = estudantes.filter((estudante) => {
        return (
            (nome && estudante.nome.toLowerCase().includes(nome.toLowerCase())) ||
            (matricula && estudante.matricula.toString().includes(matricula.toString())) ||
            (curso && estudante.curso.toLowerCase().includes(curso.toLowerCase()))
        )
    });
    return estudantesFiltrados;
}

module.exports = {
    adicionarEstudanteRepo,
    listarTodosRepo,
    encontrarPorIdRepo,
    atualizarRepo,
    removerRepo,
    buscarRepo,
};
