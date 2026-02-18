import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";

export interface TransactionResponse {
  id: string;
  amount: number;
  type: string;
  createdAt: string;
  fromName: string;
  toName: string;
  fromAccountId: string;
  toAccountId: string;
  month?: string;
}

export interface TransactionRequest {
  fromAccountId: string;
  toAccountId: string;
  amount: number;
  type: 'DEPOSIT' | 'WITHDRAW' | 'TRANSFER';
}

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private readonly api = 'https://brave-annis-banking-backend-1d47545b.koyeb.app/transactions';

  constructor(private readonly http: HttpClient) {}

  createTransaction(request: TransactionRequest): Observable<TransactionResponse> {
    return this.http.post<TransactionResponse>(this.api, request);
  }

  
  getAllTransactionsByYear(accountId: string): Observable<TransactionResponse[]> {
    return this.http.get<TransactionResponse[]>(`${this.api}/${accountId}`).pipe(
      map((transactions) => {
        const currentYear = new Date().getFullYear();

        return transactions
          .filter((t) => new Date(t.createdAt.replace(' ', 'T')).getFullYear() === currentYear)
          .map((transaction) => {
            const date = new Date(transaction.createdAt.replace(' ', 'T'));

            const monthName = date.toLocaleString('pt-BR', {
              month: 'long'
            });

            return {
              ...transaction,
              month: monthName.charAt(0).toUpperCase() + monthName.slice(1),
            };
          });
      })
    );
  }

  getLastThreeTransactions(
    accountId: string
  ): Observable<TransactionResponse[]> {

    return this.http
      .get<TransactionResponse[]>(`${this.api}/${accountId}`)
      .pipe(
        map((transactions) =>
          transactions.map((transaction) => {

            const date = new Date(
              transaction.createdAt.replace(' ', 'T')
            );

            const monthName = date.toLocaleString('pt-BR', {
              month: 'long'
            });

            return {
              ...transaction,
              month:
                monthName.charAt(0).toUpperCase() +
                monthName.slice(1)
            };
          })
        )
      );
  }

}
