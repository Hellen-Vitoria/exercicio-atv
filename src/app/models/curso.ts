export class Curso {
    idCurso!: number;
    nomeCurso!: string;

    constructor (idCurso: number, nomeCurso: string){
        this.idCurso = idCurso;
        this.nomeCurso = nomeCurso;
    }
}