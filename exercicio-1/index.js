import Aluno from './model/Aluno.js';
import TurmaPresencial from './model/TurmaPresencial.js';

const aluno1 = new Aluno('João', 'joao@aluno.com', 101);
const turmaPresencial = new TurmaPresencial('Turma B', 7, 80);

console.log(`Aluno: ${aluno1.getNome()}, RA: ${aluno1.getRA()}`);
console.log(`Aprovado na turma B (presencial): ${turmaPresencial.aprovado()}`);
