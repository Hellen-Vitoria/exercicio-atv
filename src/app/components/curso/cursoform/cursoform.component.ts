import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Curso } from '../../../models/curso';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cursoform',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './cursoform.component.html',
  styleUrl: './cursoform.component.scss'
})
export class CursoformComponent {

  curso: Curso = new Curso (0, "");
  router = inject (ActivatedRoute);
  router2 = inject (Router);

  constructor(){

    let idCurso = this.router.snapshot.params ['idCurso'];
    if (idCurso > 0){
      this.findById (idCurso);
    }
  }

  findById(idCurso: number){
    let cursoRetornado: Curso = new Curso (idCurso, "Farmácia");
    this.curso = cursoRetornado;
  }


  save(){
    if (this.curso.idCurso > 0){
      alert('Editado com sucesso!');
      this.router2.navigate(['admin/curso'], {state: {cursoEditado: this.curso}});
    }else{
      alert('Salvo com sucesso!');
      this.router2.navigate(['admin/curso'], {state: {cursoNovo: this.curso}})
    }
  }
}
