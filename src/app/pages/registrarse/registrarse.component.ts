import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FireAuthService } from 'src/app/services/fire-auth.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent {

  email: string = '';
  password: string = '';

  constructor(private fireAuth:FireAuthService, private router: Router){}

  addUser(){
    this.fireAuth.register(this.email, this.password)
    .then(() => {
      this.router.navigate(['/main']);
    })
    .catch(error => {
      console.error('Error al registrarse:', error);
    });
  }

  loginGoogle(){
    console.log("test google")
    this.fireAuth.googleAuth()
    .then(() => {
      this.router.navigate(['/main']);
    })
    .catch(error => {
      console.error('Error al iniciar sesión con Google:', error);
    });
  }

}
