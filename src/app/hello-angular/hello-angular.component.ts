import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-angular',
  templateUrl: './hello-angular.component.html',
  styleUrls: ['./hello-angular.component.scss']
})
export class HelloAngularComponent implements OnInit {
  prenom = "Jane";

  constructor() { }

  ngOnInit(): void {
  }

}
