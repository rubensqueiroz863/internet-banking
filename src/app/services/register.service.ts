import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

interface RegisterRequest {
  name: string;
  cpf: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private readonly api = 'https://brave-annis-banking-backend-1d47545b.koyeb.app/auth';

  constructor(private readonly http: HttpClient) {}

  register(data: RegisterRequest): Observable<string> {
    return this.http.post(
      `${this.api}/register`,
      data,
      { responseType: 'text'}
    );
  }
}