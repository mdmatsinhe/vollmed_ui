import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AutenticacaoService } from '../../shared/services/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private autenticaoService: AutenticacaoService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email:[null, Validators.required],
        senha:[null,Validators.required]
      }
    )
  }

  login(){
    this.autenticaoService.autenticar(this.loginForm.value.email,this.loginForm.value.senha).subscribe({
      next: (value) => {
        console.log("Login com sucesso ",value);
this.router.navigateByUrl("/cadastro/medico")
      },
      error: (err) => {
        console.log("Erro ao autenticar",err);
      }
    })
   
  }

}
