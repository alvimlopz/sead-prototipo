import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComponentconcursoComponent } from './componentconcurso/componentconcurso.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Caminho da rota para HomeComponent
  { path: 'concurso', component: ComponentconcursoComponent } // Caminho da rota para ComponentconcursoComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
