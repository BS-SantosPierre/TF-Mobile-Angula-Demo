import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.scss']
})
export class Exo1Component implements OnInit {
  color: string = 'black';

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(color: string){
    this.color = color;
  }

  resetColor() {
    this.color = 'black';
  }

  // changeColorBlue() {
  //   this.color = 'blue';
  // }

  // changeColorRed() {
  //   this.color = 'red';
  // }

}
