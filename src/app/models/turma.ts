export class Turma {
    idTurma!: number;
    nomeTurma!: string;
    semestreTurma!: string;
    anoTurma!: string;
    turnoTurma!: string;

    constructor(idTurma: number, nomeTurma: string, semestreTurma: string, anoTurma: string, turnoTurma: string) {
        this.idTurma = idTurma;
        this.nomeTurma = nomeTurma;
        this.semestreTurma = semestreTurma;
        this.anoTurma = anoTurma;
        this.turnoTurma = turnoTurma;
        
    }
}