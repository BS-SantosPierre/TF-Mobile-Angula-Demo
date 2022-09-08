import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo3',
  templateUrl: './demo3.component.html',
  styleUrls: ['./demo3.component.scss']
})
export class Demo3Component implements OnInit {
  currentStyle = {}

  isBold = false;
  isItalic = false;
  isBig = false;

  isActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  setCurrentStyle() {
    this.currentStyle = {
      'font-style': this.isItalic ? 'italic' : 'normal',
      'font-weight': this.isBold ? 'bold' : 'normal',
      'font-size': this.isBig ? '32px' : '16px'
    }
  }

  toggleBold(){
    this.isBold = !this.isBold;
    this.setCurrentStyle();
  }

  toggleItalic(){
    this.isItalic = !this.isItalic;
    this.setCurrentStyle();
  }

  toggleSize(){
    this.isBig = !this.isBig;
    this.setCurrentStyle();
  }


}
