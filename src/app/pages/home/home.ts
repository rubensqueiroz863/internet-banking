import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Menudrawer } from "../../components/menudrawer/menudrawer";
import { useMenu } from '../../services/menu.service';

@Component({
  selector: 'app-home',
  imports: [Navbar, Menudrawer],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  constructor(public useMenu: useMenu) {}
}
