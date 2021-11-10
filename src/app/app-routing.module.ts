import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { RoomsComponent } from './rooms/rooms.component';

const routes: Routes = [
 { path: 'login', component: LoginComponent},
 { path: 'rooms', component: RoomsComponent},
 { path: 'registration-form', component: RegistrationFormComponent},
 { path: 'customer', component: CustomerComponent},
 { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
