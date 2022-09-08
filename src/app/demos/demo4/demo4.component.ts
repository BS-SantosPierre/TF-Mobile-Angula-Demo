import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {
  fruitName: string = '';

  isOpen: boolean = false;

  choice: number = 1;

  fruits = ['Pomme', 'Poire', 'Pêche'];

  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('fruits')) {
      const localFruit = JSON.parse(localStorage.getItem('fruits')!);
      this.fruits = localFruit;
    }else {
      this.fruits = ['Pomme', 'Poire', 'Pêche'];
    }
  }

  addFruit(){
    this.fruits.unshift(this.fruitName);
    localStorage.setItem('fruits', JSON.stringify(this.fruits));
  }

}
