import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Aluno } from '../models/aluno';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  http = inject(HttpClient); //requisição assincrona

  API = 'http://localhost:8080/api/aluno';  

  constructor() { }

  findAll(): Observable <Aluno[]>{
    return this.http.get<Aluno[]>(this.API+'/findAll');
  }

  delete(idAluno: number): Observable <string>{
    return this.http.delete<string>(this.API+'/delete/'+idAluno, {responseType: 'text' as 'json'});
  }

  save(aluno: Aluno): Observable <string>{
    return this.http.post<string>(this.API+'/save', aluno, {responseType: 'text' as 'json'});
  }

  update (aluno: Aluno, id: number): Observable<string>{
    return this.http.put<string>(this.API+'/update/'+id, aluno,{responseType: 'text' as 'json'});
  }

  findById (id: number): Observable<Aluno>{
    return this.http.get<Aluno>(this.API+'/findById/'+id);
  }
}
