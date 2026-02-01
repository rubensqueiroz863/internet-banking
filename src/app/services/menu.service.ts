import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class useMenu {
  isOpen = false;
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }
}