import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  myForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _animeService: AnimeService,
    private _router: Router
  ) {
    this.myForm = this._fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      author: ['', Validators.required],
    });
  }

  ngOnInit(): void {

  }

  handleSubmit() {
    const { title, description, author } = this.myForm.value;
    // this._animeService.addAnime(
    //   this.myForm.value.title,
    //   this.myForm.value.description,
    //   this.myForm.value.author
    // );

    this._animeService.addAnime(
      title,
      description,
      author
    );

    this.myForm.reset();

    this._router.navigate(['anime-list']);
  }

}
