import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomerComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import {FormsModule} from '@angular/forms';
import { TopnavComponent } from './topnav/topnav.component';
import { RoomsComponent } from './rooms/rooms.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    AppComponent,
   
    CustomerComponent,
    LoginComponent,
    RegistrationFormComponent,
    TopnavComponent,
    RoomsComponent,
    HomeComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private injector: Injector){
    const InjectorInstance =this.injector;
  }
}
