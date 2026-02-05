import { Component } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { LoginService } from '../../services/login.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(private readonly registerService: RegisterService, private readonly loginService: LoginService, private readonly authService: AuthService) {}

  register() {
    const user = {
      cpf: '123456789',
      name: 'Rubens',
      email: 'rubens@gmail.com',
      password: '123456'
    };

    this.registerService.register(user).subscribe({
      next: (res) => {
        console.log('Sucesso', res);
      },
      error: (err) => {
        console.log('Erro: ', err.error)
      }
    })
  }

  login() {
    this.loginService.login('123456789', '123456')
      .subscribe({
        next: (res) => {
          console.log(res);

          localStorage.setItem('token', res.token);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

  auth() {
    this.authService.me()
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          console.log(err);
        }
      });
  }

}

