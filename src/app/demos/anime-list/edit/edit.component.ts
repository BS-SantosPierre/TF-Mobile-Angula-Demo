import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Anime } from 'src/app/models/anime';
import { AnimeService } from 'src/app/services/anime.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  anime: Anime | undefined;
  myForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _animeService: AnimeService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
  ) {
    const id = this._activatedRoute.snapshot.params['id'];
    this.anime = this._animeService.getOne(parseInt(id));

    // Si anime pas existant dans la db redirige vers la page 404
    if(this.anime === undefined) {
      this._router.navigate(['/404']);
    }

    this.myForm = this._fb.group({
      title: [this.anime?.title, Validators.required],
      description: [this.anime?.description, Validators.required],
      author: [this.anime?.author, Validators.required],
    });
  }


  ngOnInit(): void {
  }

  handleSubmit() {
    const id = this._activatedRoute.snapshot.params['id'];
    const { title, description, author } = this.myForm.value;
    this._animeService.update(parseInt(id), {
      title,
      description,
      author
    });
    this._router.navigate(['/anime-list']);
  }

}
