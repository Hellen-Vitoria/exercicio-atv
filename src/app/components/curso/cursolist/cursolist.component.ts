import { Component } from '@angular/core';
import { Professor } from '../../../models/professor';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Curso } from '../../../models/curso';

@Component({
  selector: 'app-cursolist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cursolist.component.html',
  styleUrl: './cursolist.component.scss'
})

export class CursolistComponent {

  listaCurso: Curso[] = [];

  constructor() {
    this.listaCurso.push(new Curso(1, "Análise e Desenvolvimento de Sistema"));
    this.listaCurso.push(new Curso(2, "Engenharia de Software"));
    this.listaCurso.push(new Curso(1, "Nutrição"));

    let cursoNovo = history.state.cursoNovo;
    let cursoEditado = history. state.cursoEditado;

    if (cursoNovo){
      cursoNovo.idCurso = 555;
      this.listaCurso.push(cursoNovo);
    }

    if(cursoEditado){
      let indice = this.listaCurso.findIndex (x => {return x.idCurso == cursoEditado.idCurso});
      this.listaCurso[indice] = cursoEditado;
    }
  }

  deleteById (curso: Curso){
    if (confirm ("Tem certeza que deseja deletar este registro?")){
      let indice = this.listaCurso.findIndex (x => {return x.idCurso == curso.idCurso});
      this.listaCurso.splice(indice, 1);
    }
  }
}
