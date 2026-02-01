import { Component } from '@angular/core';
import { Logo } from "../logo/logo";
import { Menu } from "../menu/menu";

@Component({
  selector: 'app-navbar',
  imports: [Logo, Menu],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

}
