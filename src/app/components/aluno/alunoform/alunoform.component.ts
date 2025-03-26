import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Aluno } from '../../../models/aluno';
import { routes } from '../../../app.routes';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-alunoform',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './alunoform.component.html',
  styleUrl: './alunoform.component.scss'
})
export class AlunoformComponent {

  aluno: Aluno = new Aluno(0, "", "", "");
  router = inject (ActivatedRoute);
  router2 = inject(Router);


  constructor() {
    let idAluno = this.router.snapshot.params ['idAluno'];
    if (idAluno > 0){
      this.findById(idAluno);
    }
  }

  findById (idAluno: number){
    //busca no back end
    let alunoRetornado: Aluno = new Aluno (idAluno, "Hellen", "0955555", "454545454545");
    this.aluno = alunoRetornado;
  }

  save(){
    if (this.aluno.idAluno > 0){

     /* Swal.fire({
        title: "Sucesso!",
        text: "Editado com sucesso!",
        icon: "warning",
        confirmButtonText: "Ok"
      })*/ //QUANDO MUDA O ICON PARA "sucess" o "fire" de Swal.fire fica dando erro

      alert('Editado com sucesso!');
      this.router2.navigate(['admin/aluno'], {state: { alunoEditado: this.aluno}});

    }else{
      alert('Salvo com sucesso!');
      this.router2.navigate(['admin/aluno'], {state: { alunoNovo: this.aluno}});
    }
  }

}
