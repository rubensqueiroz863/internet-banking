import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class ShowInfoService {
  isOpen = false;
  toggleInfo() {
    this.isOpen = !this.isOpen;
  }
}