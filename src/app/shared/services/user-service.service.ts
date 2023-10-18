import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { BehaviorSubject } from 'rxjs';
import { Utilizador } from '../../intaface/Utilizador';
import { TokenServiceService } from './token-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userSubject = new BehaviorSubject<Utilizador|null>(null);

  constructor(private tokenService: TokenServiceService) { 

    if(this.tokenService.possuiToken()){
      this.decodificarJWT();
    }

  }

  private decodificarJWT(){
    const token=this.tokenService.retornarToken();
    const user=jwtDecode(token) as Utilizador;
    this.userSubject.next(user);
  }

  retonarUtilizador(){
    return this.userSubject.asObservable();
  }

  logout(){
    this.tokenService.excluirToken();
    this.userSubject.next(null);
  }

  estaLogado(){
    return this.tokenService.possuiToken();
  }

}
