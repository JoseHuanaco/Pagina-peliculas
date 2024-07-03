import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarseComponent } from './pages/registrarse/registrarse.component';
import { SubirVidComponent } from './pages/subir-vid/subir-vid.component';
import { AdmVidComponent } from './pages/adm-vid/adm-vid.component';

const routes: Routes = [
  { path: 'main', component : MainComponent},
  { path: 'login', component : LoginComponent},
  { path: "", component : RegistrarseComponent},
  { path: 'subir-vid', component : SubirVidComponent},
  { path: 'adm-vid', component : AdmVidComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
