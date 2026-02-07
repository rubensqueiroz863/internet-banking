import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CpfMask } from '../../shared/directives/cpf-mask';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CpfMask],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  loginForm: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly loginService: LoginService) {
    this.loginForm = this.fb.group({
      cpf: [''],
      password: ['']
    });
  }

  login() {
    const formValue = this.loginForm.getRawValue();

    formValue.cpf = formValue.cpf.replaceAll(/\D/g, '');

    this.loginService.login(formValue)
      .subscribe({
        next: (res) => {
          alert("Usuário logado.");
          localStorage.setItem('token', res.token);
        },
        error: (err) => {
          alert(`Erro: ${err}`);
        }
      });
  }
}

