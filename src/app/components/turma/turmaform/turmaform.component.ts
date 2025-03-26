import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Turma } from '../../../models/turma';

@Component({
  selector: 'app-turmaform',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './turmaform.component.html',
  styleUrl: './turmaform.component.scss'
})
export class TurmaformComponent {

  turma: Turma = new Turma (0, "", "", "", "");
  router = inject (ActivatedRoute);
  router2 = inject (Router);

  constructor(){
    let idTurma = this.router.snapshot.params ['idTurma'];
    if (idTurma > 0){
      this.findById(idTurma);
    }
  }

  findById (idTurma: number){
    let turmaRetornada: Turma = new Turma (idTurma, "Segundão", "2", "2025", "Vespertino");
    this.turma = turmaRetornada;
  }

  save (){
    if (this.turma.idTurma > 0){
      alert('Editada com sucesso!');
      this.router2.navigate(['admin/turma'], {state: {turmaEditada: this.turma}});
    }else{
      alert('Salva com sucesso!');
      this.router2.navigate(['admin/turma'], {state: {turmaNova: this.turma}});
    }
  }
}
