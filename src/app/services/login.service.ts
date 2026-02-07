import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

interface AuthResponse {
  token: string;
  name: string;
  cpf: string;
}

interface LoginRequest {
  cpf: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly api = 'https://brave-annis-banking-backend-1d47545b.koyeb.app/auth';

  constructor(private readonly http: HttpClient) {}

  login(data: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.api}/login`, data);
  }
}