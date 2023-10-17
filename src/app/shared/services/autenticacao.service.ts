import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  autenticar(login: string, senha: string): Observable<any>{
    return this.http.post(`${this.apiUrl}/login`,{login,senha});
  }
}
