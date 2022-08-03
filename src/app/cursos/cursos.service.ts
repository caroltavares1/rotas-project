import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos = [
    {
      id: 1,
      nome: 'Angular'
    },
    {
      id: 2,
      nome: 'React'
    },
    {
      id: 3,
      nome: 'Django'
    },
  ]

  constructor() { }

  getCursos() {
    return this.cursos
  }

  getCurso(id: number): any {
    
   return this.cursos.find(cursos => cursos.id == id)

  }
}
