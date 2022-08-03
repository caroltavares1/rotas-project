import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logado = false

  constructor() { }

  autenticado(){
    return this.logado
    
  }
}
