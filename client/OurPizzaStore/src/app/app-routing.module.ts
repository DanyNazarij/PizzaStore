import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TemplatesComponent} from "./templates/templates.component";
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";


const routes: Routes = [
  {path: '', component: TemplatesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegistrationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
