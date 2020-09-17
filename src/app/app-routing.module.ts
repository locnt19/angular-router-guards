import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './guards/auth-guard.service';
import { RoleGuardService as RoleGuard } from './guards/role-guard.service';

import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { CreateComponent } from './pages/admin/create/create.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LogoutComponent } from './pages/logout/logout.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full', // so sánh toàn bộ URL '/' = '/'
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'list',
    component: ListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'detail',
    component: DetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [RoleGuard],
    data: {
      expectedRole: 'admin', // expectedRole có thể đổi thành gì cũng được
    },
    children: [
      {
        path: '',
        canActivateChild: [RoleGuard],
        children: [
          {
            path: '',
            redirectTo: 'dashboard',
            pathMatch: 'full',
          },
          {
            path: 'dashboard',
            component: DashboardComponent,
          },
          {
            path: 'create',
            component: CreateComponent,
          },
        ],
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
