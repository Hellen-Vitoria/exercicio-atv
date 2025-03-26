export class Aluno {
    idAluno!: number;
    nomeAluno!: string;
    cpfAluno!: string;
    telefoneAluno!: string;

    constructor(idAluno: number, nomeAluno: string, cpfAluno: string, telefoneAluno: string){
        this.idAluno = idAluno;
        this.nomeAluno = nomeAluno;
        this.cpfAluno = cpfAluno;
        this.telefoneAluno = telefoneAluno;
    }
}