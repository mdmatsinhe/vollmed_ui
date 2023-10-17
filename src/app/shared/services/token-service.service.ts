import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenServiceService {

  const KEY='token';

  constructor() { }

  gravarToken(token:string){
    return localStorage.setItem(KEY,token);
  }

  excluirToken(){
    localStorage.removeItem(KEY);
  }

  retornarToken(){
    return localStorage.getItem(KEY) ?? '';
  }

  possuiToken(){
    return this.retornarToken();
  }
}
