import { Component, Inject, Input, PLATFORM_ID, OnInit } from '@angular/core';
import { Logo } from "../logo/logo";
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Showinfomenu } from "../showinfomenu/showinfomenu";
import { AccountService, BalanceResponse } from '../../services/account.service';
import { ShowInfoService } from '../../services/showinfomenu.service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-navbarhome',
  standalone: true,
  imports: [Logo, CommonModule, Showinfomenu, RouterLink],
  templateUrl: './navbarhome.html',
  styleUrls: ['./navbarhome.scss'],
})
export class Navbarhome implements OnInit {
  balance: BalanceResponse = { balance: 0 };
  accountId: string | null = null;
  isLoading: boolean = false;
  constructor(private readonly accountService: AccountService,  @Inject(PLATFORM_ID) private readonly platformId: Object, public readonly showInfoService: ShowInfoService) {}

  @Input() page!: string;

  selectedMenu = "page";

  openMenu(name: string) {
    this.selectedMenu = name;
  }

  closeMenu() {
    this.selectedMenu = '';
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      this.accountId = localStorage.getItem('accountId');

      if (!this.accountId || !token) {
        console.error('Token ou accountId não encontrado no localStorage');
        return;
      }

      this.getBalance();
    }
  }


  getBalance() {
    if (!this.accountId) return;
    this.isLoading = true;
    this.accountService.getAccountBalance(this.accountId)
      .subscribe({
        next: (res) => {
          this.balance = res;
          console.log(res.balance);
          this.isLoading = false;
        },
        error: (err) => console.error('Erro ao carregar o saldo', err)
      });
  }

}
