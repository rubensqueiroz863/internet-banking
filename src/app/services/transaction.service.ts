import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface TransactionResponse {
  id: string;
  amount: number;
  type: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private readonly api = 'https://brave-annis-banking-backend-1d47545b.koyeb.app/transactions';

  constructor(private readonly http: HttpClient) {}

  getAllTransactions(accountId: string): Observable<TransactionResponse[]> {
    const token = localStorage.getItem('token');
    if (!token) throw new Error('Token não encontrado');
    
    return this.http.get<TransactionResponse[]>(`${this.api}/${accountId}`);
  }

}
