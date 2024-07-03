import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FireAuthService } from 'src/app/services/fire-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private fireAuth: FireAuthService, private router: Router) {}

  loginUser() {
    this.fireAuth.login(this.email, this.password)
      .then(() => {
        this.router.navigate(['/main']);
      })
      .catch(error => {
        console.error('Error al iniciar sesion:', error);
        alert("Usuario no registrado. Regístrate para crear una cuenta.");
        if (error.code === 'auth/user-not-found') {
          alert("Usuario no registrado. Regístrate para crear una cuenta.");
        }
      });
  }

  loginGoogle() {
    this.fireAuth.googleAuth()
      .then(() => {
        this.router.navigate(['/main']);
      })
      .catch(error => {
        console.error('Error al iniciar sesion con Google:', error);
      });
  }

}
