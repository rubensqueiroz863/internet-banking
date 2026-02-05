import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

interface AuthResponse {
  token: string;
  name: string;
  cpf: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly api = 'http://localhost:8080/auth';

  constructor(private readonly http: HttpClient) {}

  login(cpf: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.api}/login`, {
      cpf,
      password
    });
  }
}