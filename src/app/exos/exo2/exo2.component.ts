import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo2',
  templateUrl: './exo2.component.html',
  styleUrls: ['./exo2.component.scss']
})
export class Exo2Component implements OnInit {
  count: number = 0;
  fontSize: number = 16;
  color: string = 'black';

  currentStyle = {
    'color': 'black',
    'font-size.px': 16
  }

  constructor() { }

  ngOnInit(): void {
  }

  updateStyle() {
    if (this.count > 0) {
      this.color = 'green';
    }else if (this.count < 0) {
      this.color = 'red'
    }else {
      this.color = 'black'
    }

    this.currentStyle = {
      'color': this.color,
      'font-size.px': this.fontSize
    }
  }


  increment() {
    this.count++;  //this.count+=1; this.count = this.count + 1;
    if (this.fontSize < 32) {
      this.fontSize++;
    }
    this.updateStyle();
  }

  decrement() {
    this.count--;
    if (this.fontSize > 8) {
      this.fontSize--;
    }
    this.updateStyle();
  }

  reset() {
    this.count = 0;
    this.fontSize = 16;
    this.currentStyle = {
      'color': 'black',
      'font-size.px': 16
    }
  }

}
