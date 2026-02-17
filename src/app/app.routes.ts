import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { LandingPage } from './pages/landingpage/landingpage';
import { Home } from './pages/home/home';
import { AuthGuard } from './services/authguard.service';

export const routes: Routes = [
  { path: '', component: LandingPage },
  { path: 'login', component: Login},
  { path: 'register', component: Register},
  { path: 'home', component: Home, canActivate: [AuthGuard]}
];
