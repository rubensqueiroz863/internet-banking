import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ValidarCpfService {
  validar(cpf: string) {
    if (cpf.length !== 11) return false;

    if (/^(\d)\1+$/.test(cpf)) return false;

    let sum = 0;

    for (let i=0; i<9; i++) {
      sum += Number.parseInt(cpf[i]) * (10 - i);
    }

    let resto = sum % 11;
    let digito1 = resto < 2 ? 0 : 11 - resto;

    if (digito1 !== Number.parseInt(cpf[9])) return false;

    sum = 0;
    for (let i=0; i<10; i++) {
      sum += Number.parseInt(cpf[i]) * (11 - i);
    }

    resto = sum % 11;
    let digito2 = resto < 2 ? 0 : 11 - resto;

    return digito2 === Number.parseInt(cpf[10]);
  }
}