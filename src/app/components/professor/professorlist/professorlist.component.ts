import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Professor } from '../../../models/professor';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-professorlist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './professorlist.component.html',
  styleUrl: './professorlist.component.scss'
})
export class ProfessorlistComponent {

  listaProfessor: Professor[] = [];

    constructor(){
  
      this.listaProfessor.push(new Professor(1, 'Willian', '000.000.000-30', 'jskfjakjakks@gmail.com', '(45) 95656-6565', 'Prof de Sociologia'));
      this.listaProfessor.push(new Professor(2, 'Gustavo', '444.333.556-67', 'sfafafaafaad@gmail.com', '(45) 99999-6666', 'Prof de Matematica'));
      this.listaProfessor.push(new Professor(3, 'Welligton', '555.777.569-54', 'kkkkkkkkkk@gmail.com', '(45) 66666-9999', 'Prof de Ciencias'));

      let professorNovo = history.state.professorNovo;
      let professorEditado = history.state.professorEditado;
  
      if (professorNovo){
        professorNovo.idProfessor = 555;
        this.listaProfessor.push(professorNovo);
      }

      if (professorEditado){
        let indice = this.listaProfessor.findIndex (x => {return x.idProf == professorEditado.idProf});
        this.listaProfessor[indice] = professorEditado;
      }
    }

      deleteById(professor: Professor){
        if (confirm ("Tem certeza que deseja deletar este registro?")){
        let indice = this.listaProfessor.findIndex (x => {return x.idProf == professor.idProf});
        this.listaProfessor.splice(indice, 1);
        }
      }
}