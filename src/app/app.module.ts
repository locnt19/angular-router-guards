import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { CreateComponent } from './pages/admin/create/create.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LogoutComponent } from './pages/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListComponent,
    DetailComponent,
    LoginComponent,
    DashboardComponent,
    CreateComponent,
    NotFoundComponent,
    AdminComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
