import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroService } from './shared/livro.service';
import { ListarLivrosComponent } from './listar';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadstrarLivroComponent } from './cadstrar';




@NgModule({
  declarations: [
    ListarLivrosComponent,
    CadstrarLivroComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    LivroService
  ]
})
export class LivrosModule { }
