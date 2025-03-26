export class Professor {
    idProf!: number;
    nomeProf!: string;
    cpfProf!: string;
    emailProf!: string;
    telefoneProf!: string;
    especialidadeProf!: string;

    constructor (idProf: number, nomeProf: string, cpfProf: string, emailProf: string, telefoneProf: string, especialidadeProf: string){
        this.idProf = idProf;
        this.nomeProf = nomeProf;
        this.cpfProf = cpfProf;
        this.emailProf = emailProf;
        this.telefoneProf = telefoneProf;
        this.especialidadeProf = especialidadeProf;
    }
}