import { Component, Input, OnInit } from '@angular/core';
import { UseSelectedMenu } from '../../services/selectedmenu.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'appselectedmenucard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './selectedmenucard.html',
  styleUrl: './selectedmenucard.scss',
})
export class SelectedMenuCard implements OnInit {
  constructor(public readonly useSelectedMenu: UseSelectedMenu) {}
  ngOnInit() {
    console.log("apareci", this.title)
  }
  @Input() title!: string;
  @Input() selectedMenu!: string;
  @Input() menuClass!: string;
  @Input() buttonsClass!: string;
  @Input() buttons!: { class: string, text:string }[];

}
