import { Routes } from '@angular/router';
import { AlunolistComponent } from './components/aluno/alunolist/alunolist.component';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { AlunoformComponent } from './components/aluno/alunoform/alunoform.component';
import { ProfessorlistComponent } from './components/professor/professorlist/professorlist.component';
import { ProfessorformComponent } from './components/professor/professorform/professorform.component';
import { Curso } from './models/curso';
import { CursolistComponent } from './components/curso/cursolist/cursolist.component';
import { CursoformComponent } from './components/curso/cursoform/cursoform.component';
import { Turma } from './models/turma';
import { TurmalistComponent } from './components/turma/turmalist/turmalist.component';
import { TurmaformComponent } from './components/turma/turmaform/turmaform.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';

export const routes: Routes = [

    {path: "", redirectTo: "login", pathMatch: 'full'},
    {path: "login", component: LoginComponent},
    {path: "dashboard", component: DashboardComponent},
    {path: "admin", component: PrincipalComponent, children:[
        {path: "aluno", component: AlunolistComponent},
        {path: "aluno/new", component: AlunoformComponent},
        {path: "aluno/edit/:idAluno", component: AlunoformComponent},
        {path: "professor", component: ProfessorlistComponent},
        {path: "professor/new", component: ProfessorformComponent},
        {path: "professor/edit/:idProf", component: ProfessorformComponent},
        {path: "curso", component: CursolistComponent},
        {path: "curso/new", component: CursoformComponent},
        {path: "curso/edit/:idCurso", component: CursoformComponent},
        {path: "turma", component: TurmalistComponent},
        {path: "turma/new", component: TurmaformComponent},
        {path: "turma/edit/:idTurma", component: TurmaformComponent},
    ]}
];