import { Component, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { Navbarhome } from "../../components/navbarhome/navbarhome";
import { RouterLink } from "@angular/router";
import { AccountService, BalanceResponse } from '../../services/account.service';
import { ShowInfoService } from '../../services/showinfomenu.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TransactionRequest, TransactionResponse, TransactionService } from '../../services/transaction.service';
import { UseSelectedMenu } from '../../services/selectedmenu.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbarhome, RouterLink, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {

  balance: BalanceResponse = { balance: 0 };
  lastThreeTransactions: TransactionResponse[] = [];
  accountId: string | null = null;
  isLoading = false;
  isTransactionLoading = false;
  meses: string[] = this.getUltimosTresMeses();
  groupedTransactions: Record<string, TransactionResponse[]> = {};

  constructor(
    private readonly accountService: AccountService,
    private readonly transactionService: TransactionService,
    @Inject(PLATFORM_ID) private readonly platformId: Object,
    public readonly showInfoService: ShowInfoService,
    public readonly useSelectedMenu: UseSelectedMenu
  ) {}

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const token = localStorage.getItem('token');
    this.accountId = localStorage.getItem('accountId');

    if (!this.accountId || !token) {
      console.error('Token ou accountId não encontrado');
      return;
    }

    this.loadData();
  }

  createTransaction() {
    const request: TransactionRequest = {
      fromAccountId: 'abb23dc5-bbcc-416f-9383-85d2fa2583e1',
      toAccountId: '584da8bd-8626-4859-9314-549f56bad796',
      amount: 100,
      type: 'TRANSFER',
    };

    this.transactionService.createTransaction(request).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

  private loadData() {
    this.getBalance();
    this.getLastTransactions();
  }

  private getUltimosTresMeses(): string[] {
    const hoje = new Date();
    const meses: string[] = [];

    for (let i = 0; i < 3; i++) {
      const data = new Date(hoje.getFullYear(), hoje.getMonth() - i, 1);

      const nomeMes = data.toLocaleString('pt-BR', { month: 'long' });

      meses.push(
        nomeMes.charAt(0).toUpperCase() + nomeMes.slice(1)
      );
    }

    return meses.reverse();
  }

  private groupByMonth(): void {
    this.groupedTransactions = this.lastThreeTransactions.reduce(
      (acc, transaction) => {
        const month = transaction.month ?? 'Outros';

        if (!acc[month]) {
          acc[month] = [];
        }

        acc[month].push(transaction);
        return acc;
      },
      {} as Record<string, TransactionResponse[]>
    );
  }

  private getLastTransactions(): void {
    if (!this.accountId) return;
    this.isTransactionLoading = true;
    this.transactionService
      .getLastThreeTransactions(this.accountId)
      .subscribe({
        next: (res) => {
          this.lastThreeTransactions = res;
          this.groupByMonth();
          this.isTransactionLoading = false;
        },
        error: (err) => {
          console.error("Erro ao pegar ultimas transações.", err);
          this.isTransactionLoading = false;
        }
      });
  }

  private getBalance(): void {
    if (!this.accountId) return;

    this.isLoading = true;

    this.accountService
      .getAccountBalance(this.accountId)
      .subscribe({
        next: (res) => {
          this.balance = res;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Erro ao carregar saldo', err);
          this.isLoading = false;
        }
      });
  }
}
