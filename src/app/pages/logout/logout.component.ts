import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass'],
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logout(): void {
    localStorage.removeItem('token');
    alert('Đăng xuất thành công');
    this.router.navigate(['/']);
  }
}
