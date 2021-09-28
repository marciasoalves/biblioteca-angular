import { Injectable } from '@angular/core';
import { Livro } from './livro.model';


@Injectable()

export class LivroService {

  constructor() { }
  listarTodos(): Livro[]{
    const livros = localStorage ['livro']
    return livros?JSON.parse(livros):[];
  }

  cadastrar(livro: Livro ):void{
    const livros = this.listarTodos(); 
    livro.id = new Date(). getTime();
    livros.push(livro);
    localStorage['livro'] = JSON.stringify(livros)
  }
}
