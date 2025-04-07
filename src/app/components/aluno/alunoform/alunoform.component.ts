import { Component, EventEmitter, inject, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Aluno } from '../../../models/aluno';
import { routes } from '../../../app.routes';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2'
import { AlunoService } from '../../../services/aluno.service';

@Component({
  selector: 'app-alunoform',
  standalone: true,
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './alunoform.component.html',
  styleUrl: './alunoform.component.scss'
})
export class AlunoformComponent {

  @Input ("aluno") aluno: Aluno = new Aluno();
  @Output ("meuEvento") meuEvento = new EventEmitter();



  router = inject (ActivatedRoute);
  router2 = inject(Router);

  AlunoService = inject (AlunoService);


  constructor() {
    let idAluno = this.router.snapshot.params ['idAluno'];
    if (idAluno > 0){
      this.findById(idAluno);
    }
  }

  findById (idAluno: number){
    
    this.AlunoService.findById(idAluno).subscribe({
      next: retorno => {
        this.aluno = retorno;
      },
      error: erro => {
                Swal.fire({
                  title: 'Ocorreu um erro',
                  //icon: 'sucess',
                  confirmButtonText: 'Ok',
              });
      }
    });
  }

  save(){
    if (this.aluno.idAluno > 0){


      /*this.AlunoService.findById(idAluno).subscribe({
        next: retorno => {
  
        },
        error: erro => {
                  Swal.fire({
                    title: 'Ocorreu um erro',
                    //icon: 'sucess',
                    confirmButtonText: 'Ok',
                });
        }
      });*/

  
      alert('Editado com sucesso!');
      this.router2.navigate(['admin/aluno'], {state: { alunoEditado: this.aluno}});

    }else{

      /*this.AlunoService.findById(idAluno).subscribe({
        next: retorno => {
  
        },
        error: erro => {
                  Swal.fire({
                    title: 'Ocorreu um erro',
                    //icon: 'sucess',
                    confirmButtonText: 'Ok',
                });
        }
      });*/

      alert('Salvo com sucesso!');
      this.router2.navigate(['admin/aluno'], {state: { alunoNovo: this.aluno}});
    }
  } 

}
