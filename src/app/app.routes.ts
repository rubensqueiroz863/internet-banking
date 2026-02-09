import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { LandingPage } from './pages/landingpage/landingpage';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'login', component: Login},
  { path: 'register', component: Register}
];
