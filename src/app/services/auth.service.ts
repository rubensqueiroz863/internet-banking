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
export class AuthService {

  private readonly api = 'https://brave-annis-banking-backend-1d47545b.koyeb.app/auth';

  constructor(private readonly http: HttpClient) {}

  me(): Observable<AuthResponse> {
    return this.http.get<AuthResponse>(`${this.api}/me`);
  }
}