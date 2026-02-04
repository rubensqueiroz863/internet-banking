import { Component } from '@angular/core';
import { Logo } from "../logo/logo";
import { Menu } from "../menu/menu";
import { Loginbutton } from "../loginbutton/loginbutton";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [Logo, Menu, Loginbutton],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

}
