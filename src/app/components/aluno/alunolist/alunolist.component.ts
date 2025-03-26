import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Aluno } from '../../../models/aluno';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-alunolist',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './alunolist.component.html',
  styleUrl: './alunolist.component.scss'
})
export class AlunolistComponent {

  listaAluno: Aluno[] = [];

  constructor(){

    this.listaAluno.push(new Aluno(1, 'Hellen Vitória Marques da Silva Gonzaga', '095.420.443-30', '(45) 98834-7268'));
    this.listaAluno.push(new Aluno(2, 'Pedro Henrique', '444.333.556-67', '(45) 99999-6666'));
    this.listaAluno.push(new Aluno(3, 'Diolan Nogueira', '555.777.569-54', '(45) 66666-9999'));

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

  deleteById(aluno: Aluno){
    if (confirm ("Tem certeza que deseja deletar este registro?")){
    let indice = this.listaAluno.findIndex (x => {return x.idAluno == aluno.idAluno});
    this.listaAluno.splice(indice, 1);
    }
  }
}