import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class UseSelectedMenu {
  selectedMenu = '';

  openMenu(name: string) {
    this.selectedMenu = name;
  }

  closeMenu() {
    this.selectedMenu = '';
  }
}