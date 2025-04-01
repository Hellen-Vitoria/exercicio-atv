import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Aluno } from '../../../models/aluno';
import { RouterLink } from '@angular/router';
import { AlunoService } from '../../../services/aluno.service';
import Swal from 'sweetalert2';
import { config } from 'rxjs';

@Component({
  selector: 'app-alunolist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './alunolist.component.html',
  styleUrl: './alunolist.component.scss'
})
export class AlunolistComponent {

  listaAluno: Aluno[] = [];

  alunoService = inject (AlunoService);


  constructor(){

    this.findAll();

    let alunoNovo = history.state.alunoNovo;
    let alunoEditado = history.state.alunoEditado;

    if (alunoNovo){
      alunoNovo.idAluno = 555;
      this.listaAluno.push(alunoNovo);
    }

    if (alunoEditado){
      let indice = this.listaAluno.findIndex (x => {return x.idAluno == alunoEditado.idAluno});
      this.listaAluno[indice] = alunoEditado;
    }
  }

  findAll(){
    this.alunoService.findAll().subscribe({
      next: lista => { //quando o back retornar o que se espera
        this.listaAluno = lista;
      },
      error: erro => { //quando ocorrer qualquer erro (badrequest, exceptions...)
        Swal.fire({
          title: 'Ocorreu um erro',
          //icon: 'sucess',
          confirmButtonText: 'Ok',
      });
      }
    });
  }

  deleteById(aluno: Aluno){
    if (confirm ("Tem certeza que deseja deletar este registro?")){
      this.alunoService.delete(aluno.idAluno).subscribe({
        next: lista => { //quando o back retornar o que se espera
          Swal.fire({
            title: 'Deletado com sucesso!',
            //icon: 'sucess',
            confirmButtonText: 'Ok',
          });
          this.findAll();
        },
        error: erro => { //quando ocorrer qualquer erro (badrequest, exceptions...)
          Swal.fire({
            title: 'Ocorreu um erro',
            //icon: 'sucess',
            confirmButtonText: 'Ok',
        });
        }
      });
    }
  }
}