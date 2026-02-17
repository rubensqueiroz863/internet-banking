import { Component } from '@angular/core';
import { ShowInfoService } from '../../services/showinfomenu.service';

@Component({
  selector: 'app-showinfomenu',
  imports: [],
  standalone: true,
  templateUrl: './showinfomenu.html',
  styleUrl: './showinfomenu.scss',
})
export class Showinfomenu {
  constructor(public readonly showInfoService: ShowInfoService) {}

  toggleInfo() {
    this.showInfoService.toggleInfo();
  }
}
