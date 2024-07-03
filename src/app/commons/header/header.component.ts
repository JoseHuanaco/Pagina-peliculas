import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FireAuthService } from 'src/app/services/fire-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  isLoggedIn: boolean = false;
  userEmail: string = '';

  constructor(private fireAuth: FireAuthService, private router: Router) {}

  ngOnInit(): void {
    this.fireAuth.getAuthState().subscribe(user => {
      if (user) {
        this.isLoggedIn = true;
        this.userEmail = user.email || '';
      } else {
        this.isLoggedIn = false;
        this.userEmail = '';
      }
    });
  }

  logout(): void {
    this.fireAuth.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }

}
