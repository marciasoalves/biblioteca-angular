import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { LivroRoutes } from './livros/livros-routing.module';


export const router: Routes = [
  {
    path: '',
    redirectTo: 'livros/listar',
    pathMatch: 'full'
  },
  ...LivroRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})

export class AppRoutingModule { }


