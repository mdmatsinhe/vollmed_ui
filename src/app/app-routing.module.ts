import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroMedicoComponent } from './pages/cadastro-medico/cadastro-medico.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'cadastro/medico', component: CadastroMedicoComponent},
  {path:'', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
