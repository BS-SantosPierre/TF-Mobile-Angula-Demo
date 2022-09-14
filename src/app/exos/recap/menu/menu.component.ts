import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  isOpen: boolean = false;
  links: string[] = [
    'Home',
    'About',
    'Contact'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
