import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Professor } from '../../../models/professor';
import { routes } from '../../../app.routes';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-professorform',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './professorform.component.html',
  styleUrl: './professorform.component.scss'
})
export class ProfessorformComponent {

  professor: Professor = new Professor (0, "", "", "", "", "");
  router = inject (ActivatedRoute);
  router2 = inject(Router);

  constructor(){
    let idProf = this.router.snapshot.params['idProf'];
    if (idProf > 0){
      this.findById(idProf);
    }
  }

  findById (idProf: number){
    let professorRetornado: Professor = new Professor (idProf, "Willia", "5454545", "ejakf@gmail.com", "854545450", "Prof Geral");
    this.professor = professorRetornado;
  }

  save(){
    if (this.professor.idProf > 0){
      alert ('Editado com sucesso!');
      this.router2.navigate(['admin/professor'], {state: {professorEditado: this.professor}});
    }else{
      alert ('Salvo com sucesso!');
      this.router2.navigate(['admin/professor'], {state: {professorNovo: this.professor}});
    }
  }
}
