import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CpfMask } from '../../shared/directives/cpf-mask';
import { Router } from '@angular/router';
import { ValidarCpfService } from '../../services/validarcpf.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CpfMask],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  loginForm: FormGroup;
  resultText = "";
  showMessage = false;

  constructor(private readonly fb: FormBuilder, private readonly loginService: LoginService, private readonly router: Router, private readonly validarCpf: ValidarCpfService) {
    this.loginForm = this.fb.group({
      cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]]
    });
  }

  onSuccess() {
    this.router.navigate(['/home']);
  }

  onError(message: string) {
    this.resultText = message == "" ? "Informações inválidas." : message;
    this.showMessage = true;

    setTimeout(() => {
      this.showMessage = false;
    }, 3000); // 3 segundos
  }

  login() {
    const formValue = {
      ...this.loginForm.value,
      cpf: this.loginForm.value.cpf.replaceAll(/\D/g, '')
    };

    if (!this.validarCpf.validar(formValue.cpf)) {
      this.onError("CPF Inválido.");
      return;
    }

    this.loginService.login(formValue)
      .subscribe({
        next: (res) => {
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          this.onError("");
        }
      });
  }
}

