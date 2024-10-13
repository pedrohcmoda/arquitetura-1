import Turma from './Turma.js';

class TurmaPresencial extends Turma{
    constructor(codigo, nota, frequencia){
        super(codigo, nota);
        this.frequencia = frequencia;
    }

    getFrequencia(){
        return this.frequencia;
    }

    aprovado(){
        return super.aprovado() && this.frequencia >= 60;
    }
}

export default TurmaPresencial;