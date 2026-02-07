import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { CpfMask } from '../../shared/directives/cpf-mask';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CpfMask],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  registerForm: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly registerService: RegisterService) {
    this.registerForm = this.fb.group({
      name: [''],
      cpf: [''],
      email: [''],
      password: ['']
    });
  }

  register() {
    const formValue = this.registerForm.value;

    formValue.cpf = formValue.cpf.replaceAll(/\D/g, '');

    this.registerService.register(formValue).subscribe({
      next: (res) => {
        alert("Usuário cadastrado.")
      },
      error: (err) => {
        console.log(`Erro: ${err}`);
      }
    });
  }

}
