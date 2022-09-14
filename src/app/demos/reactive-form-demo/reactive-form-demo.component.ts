import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.scss']
})
export class ReactiveFormDemoComponent implements OnInit {
  // Simple input
  newsletter: FormControl = new FormControl(null, Validators.required);

  // Form Group
  infoUser: FormGroup = new FormGroup({
    // Info Personnel
    firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    birthDate: new FormControl(null),
    address: new FormGroup({
      street: new FormControl(null),
      zip: new FormControl(null)
    })
  });

  // Form Builder
  artistProfile = this._fb.group({
    name: [null, [Validators.required]],
    genres: this._fb.array([
      this._fb.control('', Validators.required)
    ])
  });

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

  get genres() {
    return this.artistProfile.get('genres') as FormArray;
  }

  addGenre() {
    // Accéder au getter genres
    this.genres.push(this._fb.control(null, Validators.required));
  }

  removeGenre(index: number) {
    // Accéder au getter genres
    this.genres.removeAt(index);
  }

  handleSubmit() {
    console.log(this.infoUser.value);
  }

  handleSubmitArtist() {
    console.log(this.artistProfile.value);
  }
}
