import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';

interface AuthResponse {
  token: string;
  name: string;
  cpf: string;
  accountId: string;
}

interface LoginRequest {
  cpf: string;
  password: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly api = 'https://brave-annis-banking-backend-1d47545b.koyeb.app/auth';
  private readonly platformId = inject(PLATFORM_ID);

  constructor(private readonly http: HttpClient) {}

  login(data: LoginRequest) {
    return this.http.post<AuthResponse>(`${this.api}/login`, data);
  }

  saveToken(token: string) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
    }
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
  }

  isLoggedIn(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('token');
    }
    return false;
  }
}
