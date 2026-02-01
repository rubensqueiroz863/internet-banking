import { Component } from '@angular/core';
import { useMenu } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
    constructor(public useMenu: useMenu) {}
    toggle() {
      this.useMenu.toggleMenu();
    }
}
