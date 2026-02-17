import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface BalanceResponse {
  balance: number
}

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly api = 'https://brave-annis-banking-backend-1d47545b.koyeb.app/account';

  constructor(private readonly http: HttpClient) {}

  getAccountBalance(accountId: string): Observable<BalanceResponse> {
    return this.http.get<BalanceResponse>(`${this.api}/balance/${accountId}`);
  }

}
