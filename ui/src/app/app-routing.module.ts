import { registerLocaleData } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegistrationComponent
  },

  {
    path:'homepage',
    component: HomeComponent
  }

];