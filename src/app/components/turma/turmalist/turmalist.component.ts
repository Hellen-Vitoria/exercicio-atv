import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Turma } from '../../../models/turma';

@Component({
  selector: 'app-turmalist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './turmalist.component.html',
  styleUrl: './turmalist.component.scss'
})
export class TurmalistComponent {
  listaTurma: Turma[] = [];

  constructor() {

    this.listaTurma.push(new Turma (1, 'Turma Terceirao-A', 'Semestre 1', '2025', 'Matutino'));
    this.listaTurma.push(new Turma (2, 'Turma Primeirao-B', 'Semestre 1', '2025', 'Matutino'));
    this.listaTurma.push(new Turma (3, 'Turma Terceirao-B', 'Semestre 1', '2025', 'Noturno'));

    let turmaNova = history.state.turmaNova;
    let turmaEditada = history.state.turmaEditada;

    if (turmaNova){
      turmaNova.idTurma = 555;
      this.listaTurma.push(turmaNova);
    }

    if (turmaEditada){
      let indice = this.listaTurma.findIndex (x => {return x.idTurma == turmaEditada.idTurma});
      this.listaTurma[indice] = turmaEditada;
    }
  }

  deleteById (turma: Turma){
    if (confirm ("Tem certeza que deseja deletar este registro?")){
      let indice = this.listaTurma.findIndex (x => {return x.idTurma == turma.idTurma});
      this.listaTurma.splice(indice, 1);
    }
  }

}
