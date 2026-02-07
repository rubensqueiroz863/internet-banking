import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  registerForm: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly registerService: RegisterService) {
    this.registerForm = this.fb.group({
      name: [''],
      cpf: [''],
      email: ['']
    });
  }

  register() {
    const formValue = this.registerForm.value;

    formValue.cpf = formValue.cpf.replaceAll(/\D/g, '');

    this.registerService.register(formValue).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
