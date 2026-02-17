import { Component } from '@angular/core';
import { Navbarhome } from "../../components/navbarhome/navbarhome";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Navbarhome],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
