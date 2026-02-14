import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { CpfMask } from '../../shared/directives/cpf-mask';
import { Router } from '@angular/router';
import { ValidarCpfService } from '../../services/validarcpf.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CpfMask],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  registerForm: FormGroup;

  resultText = "";
  showMessage = false;
  constructor(private readonly fb: FormBuilder, private readonly registerService: RegisterService, private readonly router: Router, private readonly validarCpf: ValidarCpfService) {
    this.registerForm = this.fb.group({
      name: [''],

      cpf: ['', [Validators.required, Validators.minLength(14)]],

      email: ['', [Validators.required, Validators.email]],

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

  register() {
    const formValue = {
      ...this.registerForm.value,
      cpf: this.registerForm.value.cpf.replaceAll(/\D/g, '')
    };

    if (!this.validarCpf.validar(formValue.cpf)) {
      this.onError("CPF Inválido");
      return;
    };

    this.registerService.register(formValue).subscribe({
      next: () => {
        this.onSuccess();
      },
      error: (err) => {
        this.onError("");
      }
    });
  }

}
