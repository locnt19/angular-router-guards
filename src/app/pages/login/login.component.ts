import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      alert('Bạn đã đăng nhập rồi!');
      this.router.navigate(['/']);
    }
  }

  loginAdmin(): void {
    const roleAdmin =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNjYzNDM4MDc3fQ.Iv0z6ZxkG5-ZjKgLd3rej6PFClyikONFH2dN8KYGl7c';
    localStorage.setItem('token', roleAdmin);
    alert('Đăng nhập admin thành công!');
    this.router.navigate(['/']);
  }
  loginUser(): void {
    const roleUser =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlVzZXIgMSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNjYzNDM4MDc3fQ.Bj0hK6gKq9Y5N6-fvERbAirW2qGxLp1pgvVXaFOXO6s';
    localStorage.setItem('token', roleUser);
    alert('Đăng nhập user thành công!');
    this.router.navigate(['/']);
  }
}
