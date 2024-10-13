class Turma {
    constructor(codigo, nota) {
        this.codigo = codigo;
        this.nota = nota;
    }

    getCodigo() {
        return this.codigo;
    }

    getNota() {
        return this.nota;
    }

    aprovado() {
        return this.nota > 6;
    }
}

export default Turma;
