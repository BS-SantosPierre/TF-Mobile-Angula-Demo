import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.scss']
})
export class Demo2Component implements OnInit {
  message: string = 'Hello World';

  isActive: boolean = false;

  private secretMessage = 'Mon message secret';

  name: string = 'John';

  fontSize: number = 16;

  constructor() { }

  ngOnInit(): void {
  }

  updateMessage() {
    console.log('Je suis là');
    this.message = 'Hello Angular';
  }

  toggleActive() {
    this.isActive = !this.isActive;
  }

  incrementFontSize() {
    this.fontSize += 1;
  }

  decrementFontSize() {
    this.fontSize -= 1;
  }

}
