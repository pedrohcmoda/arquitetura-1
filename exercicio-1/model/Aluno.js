class Aluno {
    constructor(nome, login, RA) {
        this.nome = nome;
        this.login = login;
        this.RA= RA;
    }

    getNome() {
        return this.nome;
    }

    getLogin() {
        return this.login;
    }

    getRA() {
        return this.RA;
    }

}

export default Aluno;