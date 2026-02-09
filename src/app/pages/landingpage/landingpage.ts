import { Component } from '@angular/core';
import { Navbar } from "../../components/navbar/navbar";
import { Menudrawer } from "../../components/menudrawer/menudrawer";
import { useMenu } from '../../services/menu.service';

@Component({
  selector: 'app-home',
  imports: [Navbar, Menudrawer],
  templateUrl: './landingpage.html',
  styleUrl: './landingpage.scss',
})
export class LandingPage {
  constructor(public useMenu: useMenu) {}
}
